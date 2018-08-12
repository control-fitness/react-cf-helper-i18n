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
    validates: {
      errors: {
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
  },
  form: {
    buttons: {
      back: 'Volver',
      cancel: 'Cancelar',
      goToStart: 'Ir al inicio',
      next: 'Siguiente',
      save: 'Guardar'
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
  }
}
