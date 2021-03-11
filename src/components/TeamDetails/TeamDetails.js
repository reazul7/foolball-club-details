import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './TeamDetails.css';
import genderImg from '../Images/male.png';
import genderImg2 from '../Images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitterSquare, faYoutube} from '@fortawesome/free-brands-svg-icons' ;



const TeamDetails = () => {
    const { idTeam } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]));
    }, [idTeam])
    console.log(teamDetails.strFacebook);

    return (
        <div>
            <div className='team-logo-area'>
                <img src={teamDetails.strTeamBadge} alt={teamDetails.strTeamLogo} />
            </div>
            {/* <h2>team name: {idTeam}</h2>
            <p>team name: {teamDetails.strTeam}</p> */}
            <div className="team-details">
                <div className="team-info">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="team-info-left">
                                    <h3>{teamDetails.strTeam}</h3>
                                    <h5>Founded: {teamDetails.intFormedYear}</h5>
                                    <h5>Country: {teamDetails.strCountry}</h5>
                                    <h5>Sports Type: {teamDetails.strSport}</h5>
                                    <h5>Gender: {teamDetails.strGender}</h5>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="team-info-img">
                                    {
                                        (teamDetails.strGender?.toLowerCase() === 'male') ? <img src={genderImg} alt="" /> : <img src={genderImg2} />
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="team-description">
                    <p>{teamDetails.strDescriptionEN}</p>
                    <br />
                    <p>{teamDetails.strStadiumDescription}</p>
                    <br />
                </div>
                <div className="social-icon">
                <a href= {`https://${teamDetails.strFacebook}`} target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href={`https://${teamDetails.strYoutube}`} target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href={`https://${teamDetails.strTwitter}`} target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;