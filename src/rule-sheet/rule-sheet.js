import React from 'react';
//import ReactDOM from 'react-dom';
import { Collapse, Container, Row, Col, Label, Alert } from 'reactstrap';
import './rule-sheet.css';

// import $ from 'jquery';
class RuleSheet extends React.Component {

    constructor(props) {
        super(props);
        this.state = { collapse: true };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }
    render = () => {
        return (
            <Container><Row>
                <Col className='rule-sheet rounded col-12 col-md-8 col-lg-6'>
                    <Container>
                        <Row className={'rule-sheet-header text-white ' + (this.props.success === 'true' ? 'bg-success' : 'bg-danger')}>
                            <Col onClick={this.toggle}><span>{this.props.rule.id}</span>Rule title</Col>
                        </Row>
                        <Collapse className='rule-sheet-body text-white' isOpen={this.state.collapse}>
                            <Container className='set'>
                                <Row>
                                    <Col><Label>Rule body</Label></Col>
                                </Row>
                                <Row><Col><code>{String(this.props.rule.body)}</code></Col></Row>
                            </Container>
                            <Container className='set'>
                                <Row>
                                    <Col>
                                        <Label>Next rule-id if passed</Label>
                                        <Alert color="dark">{String(this.props.rule.true_id)}</Alert>

                                    </Col>
                                    <Col>
                                        <Label>Next rule-id if failed</Label>
                                        <Alert color="dark">{String(this.props.rule.false_id)}</Alert>
                                    </Col>
                                </Row>
                            </Container>
                        </Collapse>
                    </Container>
                </Col >
            </Row></Container>
        )
    }
}

export default RuleSheet;