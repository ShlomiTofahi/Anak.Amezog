import React, { Component } from 'react'
import { FormGroup, Form } from 'react-bootstrap';


export default class Contact extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        message: '',

        send: false,
        msg: null,
        msgAlery: '',
        visible: true
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async e => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { name, email, phone, message } = this.state;
        const body = JSON.stringify({ name, email, phone, message });
        const data = {
            name,
            phone,
            email,
            message
        };

        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })

        this.toggle();
    }

    toggle = () => {
        this.setState({
            send: !this.state.send
        });
    }

    onDismiss = () => {
        this.setState({
            visible: false
        })
    }

    aboutStyle = () => {
        return {
            border: '1px solid rgb(230, 230, 230)',
            webkitBorderRadius: '15px',
            mozBorderRadius: '15px',
            borderRadius: '15px',
            marginTop: '30px',
            padding: '30px',

            webkitBoxShadow: '0 0 5px 0.1px #C7C7C7',
            boxSshadow: '0 0 5px 0.1px #C7C7C7'
        };
    };

    imgStyle = () => {
        return {
            width: '90%',
            display: 'inline',
            webkitBorderRadius: '35px',
            mozBorderRadius: '35px',
            borderRadius: '35px',
            opacity: '0.9',

        };
    };

    render() {
        return (
            <div id="contact" className='contact-fullpage side-padding my-5'>
  
                {!this.state.send ?
                    <div className="contact">
                        <h2 className='text-header-color mb-4' data-aos='fade-left'>השאירו פרטים ונחזור אליכם בהקדם</h2>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup className='contact-form'>
                                <div className='input-wrapper'>

                                <div className='input-content'>
                                <p data-aos='fade-left' data-aos-delay="500">
                                    <input className='input' onChange={this.onChange} type="text" name="name" defaultValue={this.state.name} placeholder="שם" />
                                </p>
                                <p data-aos='fade-left' data-aos-delay="1000">
                                    <input className='input' onChange={this.onChange} type="text" name="phone" defaultValue={this.state.phone} placeholder="טלפון" />
                                </p>
                                </div>
                                <div className='input-content'>
                                <p data-aos='fade-left' data-aos-delay="1500">
                                    <input className='input' onChange={this.onChange} type="email" name="email" defaultValue={this.state.email} placeholder="מייל" />
                                </p>
                                <p className="full" data-aos='fade-left' data-aos-delay="2000">
                                    <textarea className='input' onChange={this.onChange} name="message" rows="5" defaultValue={this.state.message} placeholder="פרטים נוספים" ></textarea>
                                </p>
                                </div>
                                </div>

                                <div className="full" data-aos='fade-left' data-aos-delay="2500" data-aos-anchor-placement="top-bottom">
                                    <button type="submit">שלח</button>
                                </div>
                            </FormGroup>
                        </Form>
                    </div>
                    :
                    <div className="full">
                        <div>תודה רבה, נחזור אלייך בהקדם.</div>
                        <button onClick={this.toggle}>שלח שוב</button>
                    </div>
                }
            </div>
        )
    }
}
