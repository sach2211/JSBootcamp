console.log("Script Execution Started");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    fetch('/products/nike')
    .then(r => {
      if (r.ok) {
        return r.json();
      }
      throw new Error('Error in fetching');
    })
    .then(resp => this.setState({
      products: resp.products
    }))
    .catch(e => {
      console.error('Something crashed - ', e);
    })
  }

  render() {
    return (
      this.state.products.map(thisProduct => (
          <div className='product-block'> 
            <div> {thisProduct.product} </div>
            <div>
              <img 
                style={{ width: '128px', height: '128px' }}
                src={thisProduct.search_image}
              />
            </div>
            <button className="buy-button"> Buy Now </button>
          </div>
        )
      )
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));

