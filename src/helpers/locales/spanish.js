module.exports = {
  account: {
    create: {
      header: 'Abre una cuenta',
      company: {
        header: 'Datos del centro',
        form: {
          name: 'Nombre',
          tenant: 'Dominio',
          country: 'País',
          currency: 'Moneda',
          tax: 'Impuesto',
          taxPercentage: 'Porcentaje de impuesto',
          timeZone: 'Zona horaria',
          locale: 'Idioma'
        }
      },
      user: {
        header: 'Datos del propietario',
        form: {
          name: 'Nombre',
          email: 'Correo electrónico',
          password: 'Contraseña'
        }
      },
      terms: {
        label: 'Estoy de acuerdo con los términos y condiciones'
      }
    },
  },
  form: {
    buttons: {
      back: 'Volver',
      cancel: 'Cancelar',
      createAnAccount: 'Crear una cuenta',
      enter: 'Entrar',
      goToStart: 'Ir al inicio',
      next: 'Siguiente',
      save: 'Guardar'
    }
  },
  home: {
    section: {
      title: 'Software de gestión empresarial.',
      message: 'Si es un estudio de yoga, gimnasio, spa o salón, obtenga todo lo necesario para administrar y hacer crecer su negocio.'
    },
    features: {
      title: 'Características',
      customers: {
        title: 'Clientes',
        description: 'Administra los perfiles de tus clientes.'
      },
      billing: {
        title: 'Facturación',
        description: 'Podrás llevar un control de los pagos que hagan tus clientes, aplicar descuentos.'
      },
      disciplines: {
        title: 'Disciplinas',
        description: 'Disciplinas que tienes disponible en tu centro de entrenamientos físicos.'
      },
      schedule: {
        title: 'Horarios',
        description: 'Los horarios permiten a tus clientes saber la disponibilidad de clases.'
      }
    }
  },
  masterData: {
    countries: {
      list: {
        gtm: 'Guatemala',
        slv: 'El Salvador',
        hnd: 'Honduras',
        nic: 'Nicaragua',
        cri: 'Costa Rica',
        pan: 'Panamá',
        usa: 'Estados Unidos'
      }
    },
    currencies: {
      list: {
        gtq: 'Quetzal guatemalteco - GTQ',
        svc: 'Colón salvadoreño - SVC',
        hnl: 'Lempira hondureño - HNL',
        nio: 'Córdoba nicaragüense - NIO',
        crc: 'Colón costarricense - CRC',
        pab: 'Balboa panameño - PAB',
        usd: 'Dólar estadounidense - USD'
      }
    }
  },
  notFound: {
    message: 'Al parecer estas intentando cargar una página que no existe.',
    title: 'La página no existe'
  },
  policies: {
    privacy: {
      title: 'Política de Privacidad'
    },
    terms: {
      title: 'Condiciones del servicio'
    }
  },
  validates: {
    errors: {
      headers: {
        validationFailed: 'La validación falló'
      },
      messages: {
        accepted: 'Debe ser aceptado.',
        blank: 'No puede estar en blanco.',
        empty: 'No puede estar vacío.',
        confirmation: 'No coincide.',
        equalTo: 'Debe ser igual a _count_.',
        greaterThan: 'Debe ser mayor que _count_',
        greaterThanOrEqualTo: 'Debe ser mayor que o igual a _count_',
        invalid: 'No es válido',
        lessThan: 'Debe ser menor que _count_',
        lessThanOrEqualTo: 'Debe ser menor que o igual a _count_',
        required: 'Debe existir',
      },
    },
  },
}
