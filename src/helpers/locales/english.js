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
      },
      terms: {
        label: 'I agree to the Terms and Conditions'
      }
    }
  },
  validates: {
    errors: {
      messages: {
        blank: 'Can\'t be blank.',
        empty: 'Can\'t be empty',
        confirmation: 'Doesn\'t match.',
        equalTo: 'Must be equal to _count_.',
        greaterThan: 'Must be greater than _count_',
        greaterThanOrEqualTo: 'Must be greater than or equal to _count_',
        invalid: 'Is invalid.',
        lessThan: 'Must be less than _count_',
        lessThanOrEqualTo: 'Must be less than or equal to _count_',
        required: 'Must exist.',
      },
    },
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
  },
  policies: {
    privacy: {
      title: 'Privacy Policy'
    },
    terms: {
      title: 'Terms of Service'
    }
  }
}
