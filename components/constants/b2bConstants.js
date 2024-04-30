import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const B2bConstants = {
  heroUpperText: (
    <span>
      Somos una <b>plataforma digital de bienestar integral</b>, a través de la
      cual buscaremos mejorar la salud y el rendimiento de las personas con un
      enfoque holístico y personalizado.
    </span>
  ),

  heroBottomText: (
    <span>
      Sabemos que si los colaboradores alcanzan un nivel elevado de{" "}
      <b>bienestar</b>, podrán rendir mejor en su trabajo y mejorar el ambiente
      laboral
    </span>
  ),

  ourBenefitsText:
    "Impulsamos el bienestar integral de forma personalizada, flexible y desde donde estes",

  values: "Valores",
  principles: "Principios",
  behaviors: "Comportamientos",

  fisic: "Fisico",
  mental: "Mental",
  teams: "Equipos",

  textToShow: {
    fisic: {
      title: "Beneficios fisicos",
      description:
        "En Indigo, nos enorgullece contar con un equipo de entrenadores físicos excepcionales que están aquí para guiarte en tu viaje hacia una vida más saludable y equilibrada. Nuestro enfoque va más allá del simple ejercicio; diseñamos rutinas personalizadas que se integran perfectamente a tu día a día, haciendo que adoptar hábitos saludables sea una experiencia natural y positiva. Además, recibirás valiosas recomendaciones nutricionales que te ayudarán a mantenerte hidratado y lleno de energía. Con nosotros, cada pequeño paso se convierte en un logro, y estamos aquí para celebrar cada avance contigo.",
    },
    mental: {
      title: "Beneficios para la mente",
      description:
        "Entendemos la importancia de equilibrar mente y cuerpo. Nuestro enfoque no solo se centra en el ejercicio físico, sino también en nutrir tu mente. Ofrecemos actividades diseñadas para mejorar el bienestar cognitivo, reducir la exposición a estímulos electrónicos con sesiones de Mindfulness, y proporcionar herramientas para gestionar eficazmente tu tiempo. Desde ejercicios de estimación de tiempo hasta técnicas de relajación y visualización, cada actividad está cuidadosamente diseñada para elevar tu conocimiento y demostrar que pequeños hábitos pueden marcar una gran diferencia en la calidad de tu descanso y equilibrio mental.",
    },
    teams: {
      title: "Beneficios de equipo",
      description:
        "El bienestar no es solo individual, sino también colectivo. Es por eso que ofrecemos experiencias en equipo, ya sea de forma presencial o virtual. Estas experiencias no solo fortalecen los lazos entre los colaboradores, sino que también contribuyen a mejorar el contexto organizacional. Nuestras actividades en equipo están diseñadas con un propósito alineado a los objetivos de la organización, permitiendo tanto eventos multitudinarios como experiencias más enfocadas en equipos particulares. Creemos en la importancia de crear un ciclo de retroalimentación positiva que beneficie a cada individuo y al conjunto de la organización.",
    },
  },

  ourServicesInfo: [
    {
      icon: <EmojiPeopleIcon sx={{ fontSize: "40px" }} />,
      title: "Plan integral para todos los colaboradores",
      description:
        "Brindamos un programa completo que abarca aspectos de nutrición, ejercicio y bienestar mental para todos los integrantes de tu equipo.",
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: "40px" }} />,
      title: "Planes personalizados a demanda",
      description:
        "Creamos planes adaptados a las necesidades individuales de cada colaborador, permitiéndoles tener una experiencia personalizada y enfocada en sus metas específicas.",
    },
    {
      icon: <SelfImprovementIcon sx={{ fontSize: "40px" }} />,
      title: "Experiencias de bienestar mensuales",
      description:
        "Ofrecemos actividades mensuales diseñadas para fomentar el bienestar, ya sea de forma virtual o presencial, para adaptarnos a las preferencias y disponibilidad de tu equipo.",
    },
    {
      icon: <RestaurantMenuIcon sx={{ fontSize: "40px" }} />,
      title: "Tips de nutrición saludables",
      description:
        "Proporcionamos consejos prácticos y saludables sobre nutrición para ayudar a tus colaboradores a tomar decisiones más conscientes y mejorar sus hábitos alimenticios.",
    },
    {
      icon: <CheckCircleOutlineIcon sx={{ fontSize: "40px" }} />,
      title: "Seguimiento personalizado",
      description:
        "Cada colaborador recibe un seguimiento individualizado para garantizar que estén alcanzando sus objetivos y recibir el apoyo necesario en su viaje hacia el bienestar.",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: "40px" }} />,
      title: "Informes de avances y resultados obtenidos",
      description:
        "Generamos informes detallados que muestran los avances y resultados obtenidos por cada colaborador, brindando una visión clara del impacto positivo en su bienestar.",
    },
  ],

  testimonialsInfo: [
    {
      imagePath: "/img/testimonio1.png",
      name: "Juan Perez",
      text: "Desde que incorporamos la app de bienestar en nuestra empresa, la energía y el ambiente positivo se han disparado. Los programas holísticos para nutrición, ejercicio y bienestar mental han transformado la forma en que encaramos el día a día. Gracias a la aplicación, hemos adoptado nuevos hábitos saludables que no solo han mejorado nuestra calidad de vida, sino que también han fortalecido la conexión y el rendimiento del equipo. Estamos agradecidos por esta herramienta que va más allá de lo físico y se convierte en un socio en nuestro viaje hacia el bienestar integral. ¡Una inversión que realmente vale la pena para un equipo más saludable y feliz!",
    },
    {
      imagePath: "/img/testimonio2.png",
      name: "Carolina V",
      text: "He sido testigo de cómo estas actividades no solo fortalecen los lazos entre los miembros del equipo, sino que también impulsan la moral y la colaboración en el trabajo. La forma en que diseñan y facilitan estas experiencias es simplemente excepcional. Hacen que cada actividad sea única, relevante y, sobre todo, divertida. Ver a mi equipo disfrutar, trabajar en conjunto y superar desafíos ha tenido un impacto positivo en nuestro entorno laboral. ¡Recomendaría estas experiencias de team building a cualquier empresa que busque fortalecer la unidad y la productividad en su equipo",
    },
  ],
};

export { B2bConstants };
