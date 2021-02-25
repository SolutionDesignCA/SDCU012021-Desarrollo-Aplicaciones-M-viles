

DROP TABLE IF EXISTS detalle_pedido;

DROP TABLE IF EXISTS pedidos;

DROP TABLE IF EXISTS permisos;

DROP TABLE IF EXISTS usuarios;

DROP TABLE IF EXISTS clientes;

DROP TABLE IF EXISTS grupo_permisos;

DROP TABLE IF EXISTS productos;

DROP TABLE IF EXISTS opciones;



CREATE TABLE opciones (
  codigo_opcion SERIAL  NOT NULL ,
  descripcion VARCHAR(50)      ,
PRIMARY KEY(codigo_opcion));




CREATE TABLE productos (
  codigo_producto SERIAL  NOT NULL ,
  nombre VARCHAR(50)   NOT NULL ,
  descripcion TEXT    ,
  precio DECIMAL(18,2)    ,
  fotos TEXT      ,
PRIMARY KEY(codigo_producto));




CREATE TABLE grupo_permisos (
  codigo_grupo SERIAL  NOT NULL ,
  descripcion VARCHAR(50)    ,
  es_administrador BOOL      ,
PRIMARY KEY(codigo_grupo));




CREATE TABLE clientes (
  codigo_cliente SERIAL  NOT NULL ,
  nombre_cliente VARCHAR(50)    ,
  nit VARCHAR(15)    ,
  direccion VARCHAR(100)      ,
PRIMARY KEY(codigo_cliente));




CREATE TABLE usuarios (
  codigo_usuario SERIAL  NOT NULL ,
  grupo_permisos INT   NOT NULL ,
  nombre_usuario VARCHAR(75)    ,
  apellido_usuario VARCHAR(75)    ,
  correo_electronico VARCHAR(75)    ,
  usuario VARCHAR(50)    ,
  contrasenia VARCHAR(50)      ,
PRIMARY KEY(codigo_usuario)  ,
  FOREIGN KEY(grupo_permisos)
    REFERENCES grupo_permisos(codigo_grupo));


CREATE INDEX usuarios_FKgrupo_permisos ON usuarios (grupo_permisos);


CREATE INDEX IFK_rgper_usuarios ON usuarios (grupo_permisos);


CREATE TABLE permisos (
  codigo_permiso SERIAL  NOT NULL ,
  codigo_opcion INT   NOT NULL ,
  codigo_grupo INT   NOT NULL ,
  listar BOOL    ,
  visualizar BOOL    ,
  editar BOOL    ,
  eliminar BOOL      ,
PRIMARY KEY(codigo_permiso)    ,
  FOREIGN KEY(codigo_grupo)
    REFERENCES grupo_permisos(codigo_grupo),
  FOREIGN KEY(codigo_opcion)
    REFERENCES opciones(codigo_opcion));


CREATE INDEX permisos_FKgrupo_permisos ON permisos (codigo_grupo);
CREATE INDEX permisos_FKopciones ON permisos (codigo_opcion);


CREATE INDEX IFK_rgperm_permisos ON permisos (codigo_grupo);
CREATE INDEX IFK_rop_permisos ON permisos (codigo_opcion);


CREATE TABLE pedidos (
  codigo_pedido SERIAL  NOT NULL ,
  usuario_solicito INT   NOT NULL ,
  codigo_cliente INT   NOT NULL ,
  fecha_pedido DATE    ,
  total_pedido DECIMAL(18,2)    ,
  notas TEXT      ,
PRIMARY KEY(codigo_pedido)    ,
  FOREIGN KEY(codigo_cliente)
    REFERENCES clientes(codigo_cliente),
  FOREIGN KEY(usuario_solicito)
    REFERENCES usuarios(codigo_usuario));


CREATE INDEX pedidos_FKclientes ON pedidos (codigo_cliente);
CREATE INDEX pedidos_FKusuario ON pedidos (usuario_solicito);


CREATE INDEX IFK_rped_clientes ON pedidos (codigo_cliente);
CREATE INDEX IFK_rus_pedidos ON pedidos (usuario_solicito);


CREATE TABLE detalle_pedido (
  codigo_producto INT   NOT NULL ,
  codigo_pedido INT   NOT NULL ,
  cantidad INT        ,
  FOREIGN KEY(codigo_pedido)
    REFERENCES pedidos(codigo_pedido),
  FOREIGN KEY(codigo_producto)
    REFERENCES productos(codigo_producto));


CREATE INDEX detalle_pedido_FKpedido ON detalle_pedido (codigo_pedido);
CREATE INDEX detalle_pedido_FKproductos ON detalle_pedido (codigo_producto);


CREATE INDEX IFK_rdpe_pedido ON detalle_pedido (codigo_pedido);
CREATE INDEX IFK_rpro_dpedido ON detalle_pedido (codigo_producto);





-- INGRESO DE DATOS POR DEFECTO

INSERT INTO opciones(descripcion) VALUES ('Pedidos'),('Grupo de Permisos'),('Clientes'),('Usuarios'),('Productos');

INSERT INTO grupo_permisos(descripcion,es_administrador) VALUES ('Administrador',true);

INSERT INTO usuarios(nombre_usuario,apellido_usuario,usuario,contrasenia,grupo_permisos) VALUES('Administrador','Sistema','admin','aplicacion1',1);

INSERT INTO clientes(nombre_cliente,nit,direccion) values ('EPA Mixco','12345678','Plaza Madero Roosevelt, km 13.5 Calzada Roosevelt.')
														  ,('EPA Rambla 10','90123456','Bulevar Los Próceres 25 - 76, zona 10, Centro Comercial Rambla 10.');

INSERT INTO productos(nombre,descripcion,precio) values ('Termometro Infrarrojo digital sin contacto','<ul><li><strong>Material:</strong> Plástico.</li><li><strong>Marca:</strong> Berrcom.</li><li><strong>Medidas:</strong> 15x10x4</li></ul>',529.00)
													   ,('Termometro Infrarrojo digital','<ul><li><strong>Material:</strong> Plástico.</li><li><strong>Marca:</strong> Berrcom.</li><li><strong>Medidas:</strong> 15x10x4</li></ul>',299.00)
													   ,('Esterilizador UV 59S S2','<p><span style="color: #008000;">Mata el 99.99% de virus y bacterias.</span></p><ul><li><strong>Material:</strong> Plastico.</li><li><strong>Capacidad:</strong> Hasta 21x10 metros.</li><li><strong>Marca:</strong> 59S</li></ul>',599.00);


