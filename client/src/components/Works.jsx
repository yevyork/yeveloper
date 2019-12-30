import React from "react";
import "./styles/Works.css";
import axios from "axios";

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: []
    };
  }
  async componentDidMount() {
    try {
      const response = await axios(`http://localhost:3000/api/works/`);
      this.setState({ works: response.data.works });
    } catch (err) {
      console.error(err);
    }
  }

  renderWorks = () => {
      if (this.state.works.length) {
          console.log(this.state.works)
          return this.state.works.map(work => {
            console.log(work)
              return (
                  <div className="work">
                <a className='imglink' href={work.deployedUrl}><img className='work-gif'src={work.gifUrl} alt='gif' /></a>
                <br></br>
                  <a className='work-link' href={work.deployedUrl} target='_blank'>{work.projectTitle}</a>
                  <p className='work-type'>{work.projectType}</p>
                  <p className='work-description'>{work.description}</p>
                  </div>
              )
          })
      }
  }
  

  render() { 
    const { works } = this.state
    console.log(works)
    if (!works) {
        return <p>Loading</p>;
      } else {
    return ( 
        <div className='works-main-container'>
            {this.renderWorks()}
        </div>
     );
     
}
}
}

export default Works;
