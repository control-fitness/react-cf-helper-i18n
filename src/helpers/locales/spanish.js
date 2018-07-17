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
        gtq: 'Quetzal guatemalteco',
        svc: 'Colón salvadoreño',
        hnl: 'Lempira hondureño',
        nio: 'Córdoba nicaragüense',
        crc: 'Colón costarricense',
        pab: 'Balboa panameño',
        usd: 'Dólar estadounidense'
      }
    }
  }
}
