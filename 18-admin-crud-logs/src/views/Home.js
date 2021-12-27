import React from "react";
import signOut from "../functions/cerrarSesion";
import { Container, Stack, Button, Form, Table } from "react-bootstrap";
import getAllProducts from "../functions/getAllProducts";
import eliminarProductoHome from "../functions/eliminarProductoHome";
import filtrarDatos from "../functions/filtrarDatos";

//modales
import ModalAñadir from "../components/ModalAñadir";
import ModalEditar from "../components/ModalEditar";

function Home({ usuario }) {
  const [productos, setProductos] = React.useState([]);
  const [isModalAñadir, setIsModalAñadir] = React.useState(false);
  const [isModalEditar, setIsModalEditar] = React.useState(false);
  const [productoEditar, setProductoEditar] = React.useState(null);

  async function busquedaFormHandler(e) {
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const nvosDocus = await filtrarDatos(busqueda);
    setProductos(nvosDocus);
  }

  function actualizarEstadoProductos() {
    getAllProducts().then((productos) => {
      setProductos(productos);
    });
  }

  function añadirProductoHome() {
    setIsModalAñadir(true);
  }

  React.useEffect(() => {
    actualizarEstadoProductos();
  }, []);

  return (
    <Container fluid>
      <ModalAñadir
        isModalAñadir={isModalAñadir}
        setIsModalAñadir={setIsModalAñadir}
        actualizarEstadoProductos={actualizarEstadoProductos}
        usuario={usuario}
      />
      {productoEditar && (
        <ModalEditar
          isModalEditar={isModalEditar}
          setIsModalEditar={setIsModalEditar}
          actualizarEstadoProductos={actualizarEstadoProductos}
          productoEditar={productoEditar}
          setProductoEditar={setProductoEditar}
          usuario={usuario}
        />
      )}
      <Stack direction="horizontal" className="justify-content-between">
        <p style={{ fontSize: 24 }}>Bienvenido,{usuario.email} </p>
        <Button onClick={signOut}>Cerrar sesión</Button>
      </Stack>
      <hr />

      <Form onSubmit={busquedaFormHandler}>
        <Stack direction="horizontal">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Buscar
          </Button>
          <Button
            variant="light"
            onClick={() => {
              const input = document.getElementById("busqueda");
              input.value = "";
              actualizarEstadoProductos();
            }}
          >
            Resetear
          </Button>
        </Stack>
      </Form>

      <hr />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>SKU</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos &&
            productos.map((producto, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{producto.titulo}</td>
                <td>{producto.precio}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.sku}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => {
                      setProductoEditar({ ...producto });
                      setIsModalEditar(true);
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      eliminarProductoHome(producto, usuario.email).then(
                        (confirmacion) => {
                          actualizarEstadoProductos();
                        }
                      );
                    }}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button onClick={añadirProductoHome}> Añadir Producto</Button>
    </Container>
  );
}

export default Home;
