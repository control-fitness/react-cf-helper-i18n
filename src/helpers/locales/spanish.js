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
    }
  },
  form: {
    buttons: {
      back: 'Volver',
      cancel: 'Cancelar',
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
  policies: {
    privacy: {
      title: 'Política de Privacidad'
    },
    terms: {
      title: 'Condiciones del servicio'
    }
  }
}
