const theme = {
  color: {
    primary: '#ff385c',
    secondary: '#00848a'
  },
  border: {
    primaryColor: '#EBEDF0'
  },
  font: {
    primaryColor: '#484848',
    secondaryColor: '#222'
  },
  mixins: {
    boxShadow: `
    margin-left: 10px;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
  `
  }
}

export default theme
