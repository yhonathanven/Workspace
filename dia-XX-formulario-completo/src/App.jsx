import { useState } from "react";
import "./App.css";

function App() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [experiencia, setExperiencia] = useState(5);
  const [acepta, setAcepta] = useState(false);
  const [lenguajes, setLenguajes] = useState([]);
  const [modalidad, setModalidad] = useState("");
  const [pais, setPais] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [foto, setFoto] = useState(null);
  const [color, setColor] = useState("#1e90ff");
  const [resumen, setResumen] = useState(null);


  const manejarLenguajes = (e) => {

    const { value, checked } = e.target;

    if (checked) {
      setLenguajes([...lenguajes, value]);
    } else {
      setLenguajes(
        lenguajes.filter((lenguaje) => lenguaje !== value)
      );
    }

  };


  const emailValido =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);


  const enviarFormulario = (e) => {

    e.preventDefault();

    setResumen({
      nombre,
      correo,
      password,
      edad,
      fecha,
      experiencia,
      lenguajes,
      modalidad,
      pais,
      comentarios,
      color,
      foto
    });

  };


  return (

    <div className="contenedor">


      <form onSubmit={enviarFormulario}>


        <h1>🎓 Registro de estudiante</h1>


        <label>Nombre completo</label>
        <input
          type="text"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
        />


        <label>Correo electrónico</label>
        <input
          type="email"
          value={correo}
          onChange={(e)=>setCorreo(e.target.value)}
        />


        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        <label>Edad</label>
        <input
          type="number"
          value={edad}
          onChange={(e)=>setEdad(e.target.value)}
        />


        <label>Fecha de nacimiento</label>
        <input
          type="date"
          value={fecha}
          onChange={(e)=>setFecha(e.target.value)}
        />


        <label>
          ⭐ Nivel de experiencia: {experiencia}/10
        </label>

        <input
          type="range"
          min="1"
          max="10"
          value={experiencia}
          onChange={(e)=>setExperiencia(e.target.value)}
        />



        <label className="check">
          <input
            type="checkbox"
            checked={acepta}
            onChange={(e)=>setAcepta(e.target.checked)}
          />
          Acepto términos y condiciones
        </label>



        <p>💻 Lenguajes que conozco:</p>

        <label className="check">
          <input
            type="checkbox"
            value="JavaScript"
            onChange={manejarLenguajes}
          />
          JavaScript
        </label>


        <label className="check">
          <input
            type="checkbox"
            value="Python"
            onChange={manejarLenguajes}
          />
          Python
        </label>


        <label className="check">
          <input
            type="checkbox"
            value="Java"
            onChange={manejarLenguajes}
          />
          Java
        </label>



        <p>📚 Modalidad:</p>

        <label className="check">
          <input
            type="radio"
            value="Presencial"
            checked={modalidad==="Presencial"}
            onChange={(e)=>setModalidad(e.target.value)}
          />
          Presencial
        </label>


        <label className="check">
          <input
            type="radio"
            value="Virtual"
            checked={modalidad==="Virtual"}
            onChange={(e)=>setModalidad(e.target.value)}
          />
          Virtual
        </label>



        <label>🌎 País</label>

        <select
          value={pais}
          onChange={(e)=>setPais(e.target.value)}
        >

          <option value="">
            Seleccione país
          </option>

          <option>Colombia</option>
          <option>México</option>
          <option>Argentina</option>
          <option>España</option>

        </select>



        <label>📝 Comentarios</label>

        <textarea
          value={comentarios}
          onChange={(e)=>setComentarios(e.target.value)}
          placeholder="Escribe algo sobre ti..."
        />



        <label>📷 Foto de perfil</label>

        <input
          type="file"
          onChange={(e)=>setFoto(e.target.files[0])}
        />


        {
          foto &&

          <img
            src={URL.createObjectURL(foto)}
            alt="Vista previa"
            width="150"
          />

        }



        <label>🎨 Selecciona tu color favorito</label>


        <div className="colores">


          <button
            type="button"
            className="color-btn rojo"
            onClick={()=>setColor("#ff4757")}
          ></button>


          <button
            type="button"
            className="color-btn azul"
            onClick={()=>setColor("#1e90ff")}
          ></button>


          <button
            type="button"
            className="color-btn verde"
            onClick={()=>setColor("#2ed573")}
          ></button>


          <button
            type="button"
            className="color-btn morado"
            onClick={()=>setColor("#9b59b6")}
          ></button>


          <button
            type="button"
            className="color-btn naranja"
            onClick={()=>setColor("#ffa502")}
          ></button>


        </div>



        <div
          className="color-seleccionado"
          style={{
            backgroundColor: color
          }}
        >

          Color elegido: {color}

        </div>



        <button
          type="submit"
          disabled={!acepta || !emailValido}
        >

          🚀 Enviar registro

        </button>



      </form>




      {
        resumen &&

        <div className="resumen">

          <h2>📋 Resumen</h2>


          <p>
            <b>Nombre:</b> {resumen.nombre}
          </p>


          <p>
            <b>Correo:</b> {resumen.correo}
          </p>


          <p>
            <b>Edad:</b> {resumen.edad}
          </p>


          <p>
            <b>Fecha:</b> {resumen.fecha}
          </p>


          <p>
            <b>Experiencia:</b> {resumen.experiencia}/10
          </p>


          <p>
            <b>Lenguajes:</b> {resumen.lenguajes.join(", ")}
          </p>


          <p>
            <b>Modalidad:</b> {resumen.modalidad}
          </p>


          <p>
            <b>País:</b> {resumen.pais}
          </p>


          <p>
            <b>Comentarios:</b> {resumen.comentarios}
          </p>


          <p>
            <b>Color:</b> {resumen.color}
          </p>


        </div>

      }


    </div>

  );

}


export default App;