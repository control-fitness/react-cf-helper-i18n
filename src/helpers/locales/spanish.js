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
  }
}
