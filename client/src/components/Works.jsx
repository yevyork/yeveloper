import React from "react";
import "./styles/Works.css";
import { getAllWorks } from '../services/works'

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works: []
    };
  }

  async componentDidMount() {
    try {
      const works = await getAllWorks();
      this.setState({ works })
    } catch (error) {
      console.log(error)
    }
  }

  renderWorks = () => {
          return this.state.works.map(work => {
              return (
                  <div className="work">
                <a className='imglink' href={work.deployedUrl}target='_blank'rel="noopener noreferrer"><img className='work-gif'src={work.gifUrl} alt='gif' /></a>
                <br></br>
                  <a className='work-link' href={work.deployedUrl} target='_blank'rel="noopener noreferrer">{work.projectTitle}</a>
                  <p className='work-type'>{work.projectType}</p>
                  <p className='work-description'>{work.description}</p>
                  </div>
              )
          })
      
  }
  

  render() { 
    const { works } = this.state
    
    return ( 
        <div className='works-main-container'>
            { works.length > 1 ? this.renderWorks() : (<p className='white'>If this takes more than 5 seconds to load, 
            <br></br><br></br>please contact me immediately.</p>)}
        </div>
     );
     
}
}


export default Works;
