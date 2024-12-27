import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbzx_yD46l5nAKJ3dXnKu2dHfF11nyMQ59IyBp8VjjrzZsf-veXh9Vs6HCjpNAXM0v6n/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        console.log("Error en la solicitud");
      });
  };

  const countries = [
    "Argentina",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <div className="contact" id="contact">
      <Toaster />
      <div className="container">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__text">¿En qué podemos ayudarte?</p>
        <div className="contact__wrapper">
          <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
            <div className="row">
              <div className="contact__form--input">
                <input
                  placeholder="Nombre"
                  className={`form-control contact__input ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  {...register("name", { required: true })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input">
                <input
                  placeholder="Apellido"
                  className={`form-control contact__input ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  {...register("lastName", { required: true })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input">
                <select
                  className={`form-control contact__input ${
                    errors.country ? "is-invalid" : ""
                  }`}
                  {...register("country", { required: true })}
                >
                  <option value="">País</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="contact__form--input-icon">
                  <KeyboardArrowDownIcon />
                </div>
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input">
                <input
                  placeholder="Ciudad"
                  className={`form-control contact__input ${
                    errors.city ? "is-invalid" : ""
                  }`}
                  {...register("city", { required: false })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input">
                <input
                  placeholder="Email"
                  type="email"
                  className={`form-control contact__input ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  {...register("email", { required: true })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input">
                <input
                  placeholder="Telefono"
                  type="number"
                  className={`form-control contact__input ${
                    errors.phoneNumber ? "is-invalid" : ""
                  }`}
                  {...register("phoneNumber", { required: false })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input cursor--pointer">
                <select
                  className={`form-control contact__input ${
                    errors.reason ? "is-invalid" : ""
                  }`}
                  {...register("reason", { required: false })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Consulta
                  </option>
                  <option value="Quiero Saber Mas">Quiero saber mas</option>
                  <option value="Precios">Precios</option>
                  <option value="Otros">Otros</option>
                </select>
                <div className="contact__form--input-icon">
                  <KeyboardArrowDownIcon />
                </div>
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="col-md-12 form-group mt-3 mb-4">
                <textarea
                  rows="8"
                  placeholder="Comentarios"
                  className={`form-control contact__textarea ${
                    errors.comments ? "is-invalid" : ""
                  }`}
                  {...register("comments", { required: false })}
                ></textarea>
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input cursor--pointer">
                <select
                  className={`form-control contact__input ${
                    errors.howKnow ? "is-invalid" : ""
                  }`}
                  {...register("howKnow", { required: false })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Como nos conociste?
                  </option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Referido">Referido</option>
                </select>
                <div className="contact__form--input-icon">
                  <KeyboardArrowDownIcon />
                </div>
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input">
                <input
                  placeholder="Empresa"
                  className={`form-control contact__input ${
                    errors.company ? "is-invalid" : ""
                  }`}
                  {...register("company", { required: false })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div>
                <button
                  type="submit"
                  className="contact__btn"
                  disabled={isLoading ? true : false}
                >
                  {isLoading && (
                    <>
                      <span
                        className="spinner-border spinner-border-sm mr-1"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Loading...</span>
                    </>
                  )}{" "}
                  Enviar
                </button>
              </div>
            </div>
          </form>
          <div className="contact__location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.578112841628!2d-58.44262579818009!3d-34.588443437333936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f346654215%3A0x275d46b3d4cba86f!2sUsina%20Coworking!5e0!3m2!1ses-419!2sar!4v1641346002096!5m2!1ses-419!2sar"
              className="contact__map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="contact__info">
              <div className="contact__info--item">
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/location2-icon.png"
                  width={52}
                  height={52}
                />
                <p className="contact__info--text">
                  Usina Coworking, Castillo 1366,
                  <br /> Buenos Aires - Argentina
                </p>
              </div>
              <div className="contact__info--item">
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/phone-icon.png"
                  width={52}
                  height={52}
                />
                <p className="contact__info--text">+54 9 11 2854 4896</p>
              </div>
              <div className="contact__info--item">
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/mail2-icon.png"
                  width={52}
                  height={52}
                />
                <p className="contact__info--text">info@indigobalance.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
