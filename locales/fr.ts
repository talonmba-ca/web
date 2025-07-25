export default {
  button: {
    showMore: 'Afficher plus',
    showLess: 'Afficher moins',
    continue: 'Continuer',
    cancel: 'Annuler',
    accept: 'Accepter',
    decline: 'Refuser',
    delete: 'Supprimer',
    edit: 'Modifier',
    save: 'Enregistrer',
    send: 'Envoyer',
    close: 'Fermer',
    next: 'Suivant',
    previous: 'Précédent',
    retry: 'Réessayer',
    finish: 'Terminer',
    start: 'Démarrer'
  },
  form: {
    optional: 'facultatif',
    email: {
      placeholder: 'exemple.domaine.com',
      label: 'Email',
      required: "L'email est requis",
      valid: 'Veuillez entrer une adresse email valide'
    },
    name: {
      placeholder: 'Entrez votre nom',
      label: 'Nom',
      required: 'Le nom est requis'
    },
    phone: {
      placeholder: '1234567890',
      label: 'Numéro de téléphone',
      required: 'Le numéro de téléphone est requis'
    },
    message: {
      placeholder: 'Laissez-nous un message...',
      label: 'Message',
      optional: 'facultatif'
    }
  },
  header: {
    nav: {
      videos: 'Videos',
      wotd: 'WOTD',
      features: 'Fonctionnalités',
      radio: 'Radio',
      store: 'Boutique',
      news: 'Actualités',
      class: 'Classes',
      more: 'Plus',
      blog: 'Blog',
      courses: 'Cours'
    }
  },
  donate: {
    button: 'Faire un don',
    error: {
      amount_required: 'Le montant est requis',
      amount_greater_than_zero: 'Le montant doit être supérieur à 0',
      generic: 'Une erreur est survenue'
    },
    help: {
      howtodonate: "Besoin d'aide sur la façon de faire un don ?",
      contact: 'Contactez-nous',
      watch: {
        video: 'Regardez cette vidéo'
      }
    },
    form: {
      header: 'Votre soutien fait une différence !',
      interval: {
        label: 'Période'
      },
      mode: {
        label: 'Mode'
      },
      amount: {
        placeholder: 'Entrez un montant personnalisé',
        label: 'Montant',
        other: 'Autre montant'
      },
      description: {
        label: 'Description',
        placeholder: 'Laissez-nous un message...',
        optional: 'optionnel'
      },
      button: {
        loading: 'Chargement...',
        next: 'Suivant'
      }
    },
    stripe: {
      privacy:
        'Nous utilisons Stripe, un processeur de paiement fiable et sécurisé, pour gérer toutes les transactions. Soyez assuré que nous ne stockons aucune information de votre carte sur nos serveurs. Vos informations de paiement sont cryptées et traitées en toute sécurité par {Stripe}.'
    },
    why: {
      email:
        "Nous recueillons votre adresse e-mail pour reconnaître votre don et vous offrir des privilèges exclusifs lorsque notre application sera disponible sur le Play Store et l'App Store. Vos informations seront sécurisées et utilisées uniquement à ces fins."
    }
  },
  home: {
    showcase: {
      title: "Apprendre l'Anglais ouvre des portes",
      description: 'Brisez les barrières de la langue Anglaise et construisez ensemble un avenir meilleur',
      subscribe: "S'abonner",
      donate: 'Faire un don'
    }
  },
  features: {
    title: 'Fonctionnalités',
    chat: {
      title: 'Chat',
      description:
        "Les étudiants peuvent participer à des discussions interactives avec leurs pairs, favorisant l'apprentissage collaboratif et la communication."
    },
    community: {
      title: 'Communauté',
      description:
        "Connectez-vous avec une communauté diversifiée d'apprenants et d'éducateurs pour échanger des idées, partager des ressources et se soutenir mutuellement dans leur parcours d'apprentissage de la langue."
    },
    premium_videos: {
      title: 'Vidéos Premium',
      description:
        "Accédez à un contenu vidéo exclusif en achetant ou en gagnant des crédits, fournissant des matériaux d'apprentissage approfondis et des idées au-delà des leçons standard."
    },
    quizzes: {
      title: 'Quiz',
      description:
        "Évaluez votre compréhension de chaque leçon avec des quiz interactifs conçus pour tester la compréhension et renforcer les résultats d'apprentissage."
    },
    video_calling: {
      title: 'Appels vidéo',
      description:
        "Utilisez les appels vidéo pour pratiquer directement les compétences linguistiques avec les instructeurs ou poser des questions liées au contenu du cours, améliorant l'apprentissage grâce à une interaction en temps réel."
    },
    other_features: {
      title: 'Autres Fonctionnalités',
      description:
        "Découvrez des fonctionnalités supplémentaires conçues pour enrichir l'expérience d'apprentissage, avec des explications détaillées et une disponibilité pour la commodité des utilisateurs."
    },
    wotd: {
      title: 'Mot du Jour',
      description:
        "Enrichissez votre vocabulaire avec notre fonctionnalité Mot du Jour, où vous apprendrez un nouveau mot anglais quotidiennement. Chaque mot est accompagné de sa prononciation, de sa traduction et d'exemples de phrases pour vous aider à l'intégrer dans vos conversations et écrits."
    },
    sentences: {
      title: 'Phrases',
      description:
        "Approfondissez l'apprentissage des langues avec des explications détaillées du mot ou de la phrase du jour. Cette fonctionnalité fournit un contexte supplémentaire, des conseils d'utilisation et des phrases connexes, enrichissant votre compréhension de la langue tout au long de la semaine."
    },
    lessons: {
      title: 'Leçons',
      description:
        'Que vous soyez débutant ou étudiant intermédiaire, nos leçons sont conçues pour développer vos connaissances pas à pas, en couvrant la grammaire, le vocabulaire et les compétences de communication essentielles.'
    }
  },
  thankyou: {
    message: {
      no_client_secret: "Aucun client_secret trouvé dans l'URL",
      no_payment_intent: 'Aucun paymentIntent trouvé',
      succeeded: 'Félicitations ! Don reçu.',
      processing: 'Traitement du don. Nous vous informerons lorsque le don sera reçu.',
      requires_payment_method: 'Don échoué. Veuillez essayer un autre mode de paiement.',
      error: "Quelque chose s'est mal passé.",
      success: 'Abonné avec succès'
    },
    status: {
      succeeded:
        'Merci pour votre généreux don ! Votre transaction a été réussie, et nous apprécions vraiment votre soutien. Votre contribution nous aide à faire une différence !',
      processing:
        'Merci pour votre don ! Votre transaction est en cours de traitement. Cela peut prendre quelques instants. Nous apprécions votre patience et votre soutien !',
      error:
        "Nous avons rencontré un problème lors du traitement de votre don. Veuillez vérifier vos détails de paiement et réessayer. Si le problème persiste, contactez notre équipe de support pour obtenir de l'aide. Nous nous excusons pour tout inconvénient et vous remercions pour votre soutien."
    },
    link: {
      home: "Aller à l'accueil",
      retry: 'Réessayer avec une autre méthode'
    }
  },
  footer: {
    'all-rights': 'Tous droits réservés',
    contact: 'Contact',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    developer: 'Développeur',
    tutorials: 'Tutoriels',
    download: {
      text: "Obtenez la meilleure expérience – Téléchargez notre application dès aujourd'hui !",
      qr: "Téléchargez Dooke gratuitement dès aujourd'hui"
    }
  },
  verify: {
    button: 'Vérifier votre adresse e-mail'
  },
  resetPassword: {
    title: 'Ajouter un nouveau mot de passe',
    passwordLabel: 'Mot de passe',
    passwordRequired:
      'Le mot de passe est requis et doit contenir au moins 8 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.',
    passwordDoesNotMatch: 'Les mots de passe ne correspondent pas',
    confirmPasswordLabel: 'Confirmer le mot de passe',
    passwordPlaceholder: '********',
    confirmPasswordPlaceholder: '********',
    resetPasswordButton: 'Réinitialiser le mot de passe',
    successMessage: 'Mot de passe réinitialisé avec succès',
    errorMessage: "Quelque chose s'est mal passé",
    contactSupport:
      'Si vous rencontrez des problèmes pour vérifier votre compte ou réinitialiser votre mot de passe, veuillez contacter notre équipe de support'
  },
  videos: {
    filter: {
      all: 'Tous',
      level: 'Niveau',
      category: 'Catégorie',
      searchPlaceholder: 'Rechercher par mot-clé ou titre...'
    }
  },
  select: {
    placeholder: 'Sélectionnez une option',
    donationType: ['Une fois', 'Récurrent'],
    donationInterval: ['Jour', 'Semaine', 'Mois', 'Année']
  },
  download: {
    text: "Si vous n'êtes pas redirigé automatiquement, veuillez choisir votre plateforme et télécharger l'application."
  },
  classes: {
    title: 'Cours Zoom',
    subtitle: 'Recevez des conseils et un soutien en temps réel',
    continue: 'Continuer',
    enrollNow: 'Inscrivez-vous maintenant',
    policy: 'En vous inscrivant à ce cours, vous acceptez nos {terms} et notre {privacy}',
    terms: 'Accord de politique de cours',
    startDate: 'Date de début',
    endDate: 'Date de fin',
    inscriptionEndDate: 'Fin des inscriptions',
    maxStudent: 'Nombre maximum d’étudiants',
    level: 'Niveau',
    description: 'Description',
    enroll: 'S’inscrire',
    enrollSuccess: 'Vous vous êtes inscrit avec succès à ce cours',
    enrollError: 'Une erreur est survenue lors de l’inscription à ce cours',
    message:
      'Merci de vous être inscrit à notre cours ! Pour poursuivre les prochaines étapes, veuillez ouvrir l’e-mail que nous venons de vous envoyer. Il contient des instructions importantes sur ce que vous devez faire ensuite pour commencer votre cours.',
    requirements: 'Exigences',
    content: 'Contenu du cours',
    sitesAvailable: 'Places disponibles',
    schedules: 'Horaires',
    bookAdvice: 'Pour vous inscrire à ce cours, nous vous recommandons d’acheter le livre. Vous pouvez le trouver dans le lien ci-dessus.',
    cancel: 'Annuler',
    accept: 'Accepter',
    decline: 'Refuser',
    notAcceptPolicyError: 'Vous devez accepter les termes et conditions pour vous inscrire à ce cours',
    policyText:
      "En vous inscrivant à ce cours, vous acceptez nos <span class='text-primary font-medium underline'>termes et conditions ainsi que notre politique de confidentialité</span>",
    pay: 'Payer',
    total: 'Total',
    teacher: 'Professeur',
    //
    lessons: 'Leçons',
    joinClassNow: 'Rejoindre une classe maintenant',
    noClassJoined: "Vous n'avez rejoint aucune classe pour le moment",
    classes: 'Mes classes',
    viewDetails: 'Voir les détails',
    homeworks: 'Mes devoirs',
    noHomeworksToDo: "Vous n'avez aucun devoir à faire",
    restore: {
      restore: 'Restaurer una classe',
      restoreYourClass: 'Restaurer votre classe',
      email: 'E-mail',
      enterYourEmail: 'Entrez votre e-mail',
      studentCode: 'Code étudiant',
      enterYourStudentCode: 'Entrez votre code étudiant',
      emailTooltip: "C'est l'e-mail que vous avez utilisé pour rejoindre votre classe",
      codeTooltip: "C'est le code que vous avez reçu par e-mail après avoir rejoint votre classe. Vérifiez votre boîte de réception.",
      cancel: 'Annuler',
      restoreButton: 'Restaurer',
      fillAllFields: 'Veuillez remplir tous les champs'
    },
    finalScore: 'Note finale',
    devolution: 'Remise',
    joinZoomNow: 'Rejoindre la réunion Zoom',
    review: {
      leaveReview: 'Laisser un avis'
    },
    previousClass: 'Cours précédents',
    noClasses: 'Aucune classe disponible pour le moment',
    submitted: 'Soumis',
    qualified: 'Noté',
    waitingForReview: 'En attente de révision',
    classStarts: 'Le cours commence dans ',
    paid: 'Payé'
  },
  courses: {
    buyNow: 'Acheter maintenant',
    free: 'Gratuit',
    policy: 'En vous inscrivant à ce cours, vous acceptez nos {terms}',
    teacher: 'Enseignant',
    teachers: 'Enseignants',
    students: 'Étudiants',
    reviews: 'Avis',
    ratings: 'évaluations',
    lastUpdate: 'Dernière mise à jour',
    description: 'Description',
    content: 'Contenu du cours',
    requirements: 'Prérequis',
    chapters: 'Chapitres',
    lectures: 'Cours',
    whatWillYouLearn: 'Ce que vous allez apprendre',
    goToCourse: 'Aller au cours',
    enrollSuccess: 'Paiement réussi – Bienvenue au cours {title} !',
    enrollError: "Une erreur est survenue lors de l'inscription à ce cours",
    freePreview: 'Aperçu gratuit',
    questions: 'Questions',
    termOfUse: "Conditions d'utilisation",
    completed: 'terminé',
    leaveAReview: 'Laisser un avis',
    editYourReview: 'Modifier votre avis',
    message:
      'Vous pouvez maintenant commencer votre cours. Cliquez simplement sur le bouton ci-dessous pour débuter votre apprentissage. Nous espérons que vous vivrez une excellente expérience !',
    cancel: 'Annuler',
    pay: 'Payer',
    total: 'Total',
    review: {
      yourReview: 'Votre avis',
      deleteYourReview: 'Supprimer votre avis',
      areYouSureDelete: 'Êtes-vous sûr de vouloir supprimer votre avis ? Cette action est irréversible.',
      whyLeaveRating: 'Pourquoi avez-vous laissé cette note ?',
      howRateCourse: 'Comment évalueriez-vous ce cours ?',
      writeReviewPlaceholder: 'Écrivez un avis ...',
      delete: 'Supprimer',
      editReview: "Modifier l'avis",
      cancel: 'Annuler',
      yesDeleteIt: 'Oui, supprimer',
      submitReview: "Soumettre l'avis",
      updateReview: "Mettre à jour l'avis",
      reviewSavedSuccess: 'Avis enregistré avec succès',
      reviewDeletedSuccess: 'Avis supprimé avec succès',
      errorOccurred: 'Une erreur est survenue'
    },
    shareCourse: 'Partager ce cours',
    completeAndContinue: 'Terminer et continuer',
    markAsIncomplete: 'Marquer comme incomplet',
    myCourses: 'Mes cours',
    noCourses: "Vous n'êtes inscrit à aucun cours pour le moment",
    buyACourse: 'Acheter un cours',
    viewDetails: 'Voir les détails',
    continueWithCourse: 'Continuer le cours',
    startCourse: 'Commencer le cours',
    empty: 'Aucun cours disponible pour le moment. Veuillez vérifier plus tard.',
    enroll: 'S’inscrire',
    links: 'Liens utiles'
  },
  quiz: {
    restartQuiz: 'Recommencer le quiz',
    correct: 'Correct',
    incorrect: 'Incorrect',
    passed: 'Réussi',
    failed: 'Échoué',
    score: 'Score',
    totalPoint: 'Points totaux',
    quitQuizTitle: 'Êtes-vous sûr de vouloir quitter le quiz ?',
    alreadyTaken: 'Vous avez déjà soumis ce quiz',
    downloadCSV: 'Télécharger CSV',
    backToHomework: 'Retour au devoir',
    homeworkSubmitted: 'Vous avez soumis votre devoir avec succès.',
    partialNote: 'Votre note finale sera disponible après la correction complète.'
  },
  translation: {
    title: 'Traduction',
    t: 'Traduire',
    from: 'De',
    to: 'À',
    text: 'Texte',
    transToEn: 'Traduire en Anglais',
    transToFr: 'Traduire en Français',
    transToHt: 'Traduire en Créole Haïtien',
    transToEs: 'Traduire en Espagnol'
  }
} as const
