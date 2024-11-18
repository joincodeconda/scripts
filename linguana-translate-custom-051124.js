window.addEventListener("load", function () {
  if (window.location.pathname.includes("/en")) {
    const translations = {
      "Lire la suite": "Read more",
      "STREET DESIGNERS : NOS AVANTAGES": "STREET DESIGNERS: OUR ADVANTAGES",
      "Agence de création forte de ses nombreuses années d’expérience dans le monde de l’art et de l’animation d’événements professionnels, Street Designers se compose d’artistes graffeurs reconnus et passionnés par l’art urbain.":
        "A creative agency with many years of experience in the world of art and professional event animation, Street Designers is composed of recognized graffiti artists passionate about urban art.",
      "Tous sont choisis avec attention en fonction de leurs travaux artistiques et de leur pédagogie, leur capacité à dévoiler la fibre artistique de chaque participant.":
        "All are carefully chosen based on their artistic work and teaching skills, their ability to reveal the artistic talent of each participant.",
      "Chaque artiste sélectionné par Street Design a son propre style : les prestations d’animations et de team buidling créatifs évoluent en fonction de vos demandes, de vos attentes et de vos objectifs.":
        "Each artist selected by Street Designers has their own style: the creative team-building activities and events evolve based on your requests, expectations, and objectives.",
      "Nous vous accompagnons dans le choix et la personnalisation de notre offre.":
        "We assist you in selecting and personalizing our offer.",
      "L’art est un formidable moyen d’expression et de partage et constitue donc une animation de team building aussi efficace qu’innovante.":
        "Art is an incredible means of expression and sharing and, therefore, constitutes a team-building activity that is as effective as it is innovative.",
      "Lors d’une animation artistique en": "During an artistic activity in",
      "graffiti à Paris et toutes les autres animations artistiques":
        "graffiti in Paris and all other artistic activities",
      "nos artistes": "our artists",
      "sont au premier plan pour encadrer et animer le programme de votre team building.":
        "are at the forefront to supervise and lead your team-building program.",
      "En faisant appel à Street Designers pour vos événements, vous profitez d’une véritable expertise grâce à une équipe dynamique et réactive qui vous proposera des animations conçues par ses propres soins.":
        "By calling on Street Designers for your events, you benefit from genuine expertise thanks to a dynamic and responsive team that will offer you activities created by them.",
      "Avec Street Designers, plongez dès maintenant dans une activité arty, graffiti ou street art ou découvrez les différentes techniques de cette discipline !":
        "With Street Designers, dive into an arty, graffiti, or street art activity or discover the different techniques of this discipline!",
      "STREET DESIGNERS : DES ACTIVITES ARTISTIQUES ORIGINALES ADAPTEES A TOUS":
        "STREET DESIGNERS: ORIGINAL ARTISTIC ACTIVITIES ADAPTED FOR ALL",
      "Toutes les activités artistiques que nous proposons ont été créées par nos équipes.":
        "All the artistic activities we offer have been created by our teams.",
      "Votre animation d’équipe est conçue et encadrée par un street artist, passionné par l’art et formé aux techniques d’animation professionnelle pour un résultat unique à Paris et même ailleurs.":
        "Your team activity is designed and led by a street artist passionate about art and trained in professional animation techniques for a unique result in Paris and beyond.",
      "Si vous avez un besoin spécifique ou si vous souhaitez partager un moment de création avec vos collaborateurs, Street Designers peut donc répondre à votre demande !":
        "If you have a specific need or wish to share a creative moment with your colleagues, Street Designers can meet your request!",
      "Grâce à une activité artistique de graffiti, tout le monde peut s’amuser tout en créant une œuvre de qualité.":
        "Thanks to an artistic activity of graffiti, everyone can have fun while creating a quality piece.",
      "Au cours de nos animations originales, chaque participant joue un rôle acteur de l’animation proposée !":
        "During our original activities, each participant plays an active role in the proposed animation!",
      "Les dirigeants d’entreprise et plus généralement les managers sont toujours très étonnés de découvrir ou redécouvrir certaines personnalités durant une activité créative et artistique.":
        "Business leaders and managers, in general, are always amazed to discover or rediscover certain personalities during a creative and artistic activity.",
      "Révéler des personnalités, encourager la cohésion d’équipe ou encore créer un moment convivial figure parmi les différents objectifs d’un team building créatif.":
        "Revealing personalities, encouraging team cohesion, or creating a friendly moment are among the various objectives of creative team building.",
      "Envie de décorer une vitrine ou vos locaux ? Faites appel à notre équipe pour un design mural sur-mesure.":
        "Want to decorate a storefront or your premises? Contact our team for a custom mural design.",
      "POURQUOI REALISER UNE ANIMATION D&#x27;EQUIPE OU CREATION ARTISTIQUE ?":
        "WHY ORGANIZE A TEAM ACTIVITY OR ARTISTIC CREATION?",
      "En plus d’être originales, les différents animations mises en place par Street Designers présentent de multiples avantages :":
        "In addition to being original, the various activities organized by Street Designers offer multiple advantages:",
      "En fonction des attentes de nos clients, nous sommes en mesure d’adapter notre offre. En effet, chaque animation artistique est réalisée par nos soins, ce qui nous permet de connaître les besoins spécifiques de chaque activité. Une animation sur mesure de A à Z qui prend en compte vos attentes !":
        "Depending on the expectations of our clients, we are able to adapt our offer. Indeed, each artistic activity is carried out by us, allowing us to understand the specific needs of each activity. A custom animation from A to Z that takes your expectations into account!",
      "En faisant appel à nos services pour la mise en place d’un projet artistique, chaque participant est sûr de s’amuser, de participer activement et de créer une œuvre de qualité peu importe son talent ou ses connaissances en art urbain. Durant l’activité, tous les participants sont au cœur de l’animation et restent engagés":
        "By using our services for the implementation of an artistic project, each participant is sure to have fun, actively participate, and create a quality piece regardless of their talent or knowledge in urban art. During the activity, all participants are at the heart of the animation and remain engaged.",
      "Avec Street Designers, participez à une activité artistique unique et ludique. Les différents équipements nécessaires à la réalisation de graffitis sont fournis.":
        "With Street Designers, take part in a unique and fun artistic activity. The different equipment necessary for creating graffiti is provided.",
      "Grâce à une animation de graffiti à Paris (notamment), plongez dans le monde du street art. Devenez un artiste le temps d’un instant, révélez vos talents cachés et créez des toiles avec un coach à vos côtés.":
        "Through an animation of graffiti in Paris (notably), immerse yourself in the world of street art. Become an artist for a moment, reveal your hidden talents, and create canvases with a coach by your side.",
      "La qualité de l’œuvre est l’une de nos priorités. Nous souhaitons que nos clients affichent leur réalisation avec fierté dans leur bureau ou même chez eux, qu’ils soient fiers de présenter leur production artistique.":
        "The quality of the artwork is one of our priorities. We want our clients to proudly display their creation in their office or even at home, proud to present their artistic production.",
      "Une large palette d’animations pour répondre à tous vos besoins. De la création d’une œuvre en direct par un street artist pour un lancement de produit en passant par une animation de team building ayant pour but de créer une fresque collaborative, les conseils de l’agence événementielle vous aide à faire le bon choix !":
        "A wide range of activities to meet all your needs. From the live creation of a piece by a street artist for a product launch to a team-building activity aimed at creating a collaborative mural, the advice from our event agency helps you make the right choice!",
      "Si vous avez envie d’organiser un événement ou une activité artistique pour un team building moderne et innovant, n’hésitez pas à nous contacter via le formulaire de contact mis à disposition sur notre site. Nous vous répondrons dans les plus brefs délais.":
        "If you wish to organize an event or an artistic activity for a modern and innovative team building, do not hesitate to contact us via the contact form available on our site. We will respond as soon as possible.",
      "Avec Street Designers, plongez dès maintenant dans une activité arty, graffiti ou street art ou découvrez les différentes techniques de cette discipline !":
        "With Street Designers, immerse yourself now in an arty, graffiti or street art activity or discover the different techniques of this discipline!",
      "Grâce à une ": "Thanks to a ",
      "activité artistique de graffiti ": "graffiti artistic activity ",
      "tout le monde peut s’amuser tout en créant une œuvre de qualité.":
        "everyone can have fun while creating a quality piece.",
      "Envie de décorer une vitrine ou vos locaux ? Faites appel à notre équipe pour un ":
        "Want to decorate a storefront or your premises? Contact our team for a ",
      "design mural sur-mesure.": "custom mural design.",
      "POURQUOI REALISER UNE ANIMATION D'EQUIPE OU CREATION ARTISTIQUE ?":
        "WHY ORGANIZE A TEAM ACTIVITY OR ARTISTIC CREATION?",
      "STREET DESIGNERS : DES ACTIVITES ARTISTIQUES ORIGINALES ADAPTEES A TOUS":
        "STREET DESIGNERS: ORIGINAL ARTISTIC ACTIVITIES ADAPTED FOR ALL",
      "En fonction des attentes de nos clients, nous sommes en mesure d’adapter notre offre. En effet, chaque animation artistique est réalisée par nos soins, ce qui nous permet de connaître les     besoins spécifiques de chaque activité. Une animation sur mesure de A à Z qui prend en compte vos attentes ! ":
        "Depending on the expectations of our clients, we are able to adapt our offer. Indeed, each artistic activity is carried out by us, allowing us to understand the specific needs of each activity. A custom animation from A to Z that takes your expectations into account!",
      "Grâce à une animation de ": "Thanks to an animation of ",
      "graffiti à Paris (notamment), ": "graffiti in Paris (notably), ",
      "plongez dans le monde du street art. Devenez un artiste le temps d’un instant, révélez vos talents cachés et créez des toiles avec un coach à vos côtés. ":
        "immerse yourself in the world of street art. Become an artist for a moment, reveal your hidden talents, and create canvases with a coach by your side.",
      "Une large palette d’animations pour répondre à tous vos besoins. De la création d’une œuvre en direct par un street artist pour un lancement de produit en passant par une animation de team building ayant pour but de créer une fresque collaborative, les conseils de l’agence événementielle vous aide à faire le bon choix ! ":
        "A wide range of activities to meet all your needs. From the live creation of a piece by a street artist for a product launch to a team-building activity aimed at creating a collaborative mural, the advice from our event agency helps you make the right choice!",
      "Si vous avez envie d’organiser un événement ou une activité artistique pour un ":
        "If you wish to organize an event or an artistic activity for a ",
      "team building moderne et innovant, ":
        "modern and innovative team building, ",
      "n’hésitez pas à nous contacter via le ":
        "do not hesitate to contact us via the ",
      "formulaire de contact ": "contact form ",
      "mis à disposition sur notre site. Nous vous répondrons dans les plus brefs délais.":
        "available on our site. We will respond as soon as possible.",
    };

    function replaceTextInNode(node) {
      let text = node.nodeValue;
      Object.keys(translations).forEach((frenchText) => {
        const englishText = translations[frenchText];
        text = text.replace(new RegExp(frenchText, "g"), englishText);
      });
      node.nodeValue = text;
    }

    function traverseDOM(element) {
      element.childNodes.forEach((child) => {
        if (child.nodeType === 3) {
          replaceTextInNode(child);
        } else if (child.nodeType === 1) {
          traverseDOM(child);
        }
      });
    }

    traverseDOM(document.body);
  }
});
