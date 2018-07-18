module.exports = {
  account: {
    create: {
      header: 'Create an account',
      company: {
        header: 'Fitness center data',
        form: {
          name: 'Name',
          tenant: 'Domain',
          country: 'Country',
          currency: 'Currency',
          tax: 'Tax',
          taxPercentage: 'Tax percentage',
          timeZone: 'Time zone',
          locale: 'Language'
        }
      },
      user: {
        header: `Owner's basic information`,
        form: {
          name: 'Name',
          email: 'Email',
          password: 'Password'
        }
      }
    }
  },
  form: {
    buttons: {
      back: 'Back',
      cancel: 'Cancel',
      next: 'Next',
      save: 'Save'
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
        pan: 'Panama',
        usa: 'United States'
      }
    },
    currencies: {
      list: {
        gtq: 'Guatemalan quetzal - GTQ',
        svc: 'Salvadoran Columbus - SVC',
        hnl: 'Honduran lempira - HNL',
        nio: 'Nicaraguan cordoba - NIO',
        crc: 'Costa Rican colon - CRC',
        pab: 'Panamanian balboa - PAB',
        usd: 'United States dollar - USD'
      }
    }
  }
}
