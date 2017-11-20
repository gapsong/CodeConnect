import React from 'react';
import {connect} from 'react-redux'
import {Button, Panel, Col} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';

class ProjectCards extends React.Component {
  constructor(props) {
    super(props);
  }

  getToUserProfil(){
    //TODO hier muss man zu anderen Profilen kommen können
    // browserHistory.push('/project/' + project_id);
  }

  render() {
    const description = this.props.project.description
      ? this.props.project.description
      : "";
    return (
      <div className ="parent-pCards">
        <div className="panel-pCards container-pCards" onClick={() => {
          this.props.onClick()
        }}>
          <div className="headerWrapper">
              <img className="imageWrapper" src={this.props.project.image}/>
              <h3 title={this.props.project.name} >{this.props.project.name}</h3>
          </div>
          <div className ="infoWrapper">
            <ReactMarkdown className="textBox" source={this.props.project.description}/>
          </div>
        </div>
        <div className="footer-pCards">
          <p className ="footer-text-pCards" onClick={() => this.getToUserProfil(this.props.project.mentor_id)}>by {this.props.project.mentor_name}</p>
        </div>
      </div>
    );
  }
}

export default ProjectCards;
