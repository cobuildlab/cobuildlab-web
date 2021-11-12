import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import { Field, Control, Input, TextArea, Label as BloomerLabel, Select } from 'bloomer';
import styled from 'styled-components';
import ButtonDefault from './Button/ButtonDefault';
import Error from '../Toast/Error';
import queryString from 'query-string';

const INDUSTRIES = [
  'Airlines/Aviation',
  '  Animation',
  '  Apparel & Fashion',
  '  Architecture & Planning',
  '  Arts & Crafts',
  '  Automotive',
  '  Aviation and Aerospace',
  '  Banking',
  '  Biotechnology',
  '  Broadcast Media',
  '  Building Materials',
  '  Business Supplies & Equipment',
  '  Chemicals',
  '  Civic and Social Organization',
  '  Commercial Real Estate',
  '  Computer & Network Security',
  '  Computer Hardware',
  '  Computer Networking',
  '  Computer Software',
  '  Construction',
  '  Consumer Electronics',
  '  Consumer Goods',
  '  Consumer Services',
  '  Cosmetics',
  '  Defense & Space',
  '  Design',
  '  E-learning',
  '  Electrical & Electronic Manufacturing',
  '  Entertainment',
  '  Events Services',
  '  Farming',
  '  Financial Services',
  '  Food & Beverages',
  '  Food Production',
  '  Gambling & Casinos',
  '  Government Administration',
  '  Graphic Design',
  '  Health, Wellness & Fitness',
  '  Hospital & Health Care',
  '  Hospitality',
  '  Human Resources',
  '  Import and Export',
  '  Industrial Automation',
  '  Information Services',
  '  Information Technology and Services',
  '  Insurance',
  '  Legal Services',
  '  Leisure, Travel & Turism',
  '  Logistics & Supply Chain',
  '  Management Consulting',
  '  Marketing & Advertising',
  '  Media Production',
  '  Military',
  '  Mining & Metals',
  '  Music',
  '  Newspapers',
  '  Non-profit Organization Management',
  '  Online Media',
  '  Packaging and Containers',
  '  Primary/Secondary Education',
  '  Printing',
  '  Professional Training & Coaching',
  '  Real Estate',
  '  Restaurants',
  '  Retail',
  '  Sporting Goods',
  '  Staffing & Recruiting',
  '  Telecommunications',
  '  Transportation/Trucking/Railroad',
  '  Utilities',
  '  Venture Capital & Private Equity',
  '  Warehousing',
  '  Wholesale',
  '  Wine & Spirits',
  '  Writing & Editing',
];
const Label = styled(BloomerLabel)`
  color: #264a60;
`;

export default class Contact extends PureComponent {
  static defaultProps = {
    btnText: 'submit',
  };

  static propTypes = {
    btnText: PropTypes.string,
    landingName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    const { landingName } = this.props;
    this.state = {
      data: {
        name: '',
        email: '',
        phone: '',
        message: '',
        industry: '',
        landingName,
      },
      isLoading: false,
    };
    this.url = '';
    this.locationJSON = null;
    this.urlState = null;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    for (let property in this.urlState) {
      if (this.urlState[property] !== undefined) {
        localStorage.setItem('utm_source', this.urlState[property]);
      }
    }
    if (typeof window !== 'undefined') {
      this.setState({ location: window.location });
      this.locationJSON = JSON.stringify(window.location);
      this.urlState = queryString.parse(window.location.hash);
    }
  }

  handleChange(e) {
    console.log('CHANGE', e);
    const field = { [e.target.name]: e.target.value };
    console.log('CHANGE', e.target.name, e.target.value);
    this.setState((state) => ({
      data: {
        ...state.data,
        ...field,
      },
    }));
  }

  async onSubmit(event) {
    event.preventDefault();
    const {
      data: { name, email, message, phone, landingName, industry },
    } = this.state;

    if (!name.length) {
      toast.dismiss();
      toast(<Error message="name can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!email.length) {
      toast.dismiss();
      toast(<Error message="Email can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    if (!industry.length) {
      toast.dismiss();
      toast(<Error message="Industry can't be empty" />, {
        position: 'bottom-right',
        hideProgressBar: true,
      });
      return;
    }

    this.setState({
      isLoading: true,
    });

    const data = {
      name,
      email,
      message,
      phone,
      industry,
      landing: landingName,
    };

    data.message += '\nutm_source:' + localStorage.getItem('utm_source');
    data.message += '\n<br/>Industry:' + industry;
    data.message += '\n<br/>location extra:' + this.locationJSON;

    const settings = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      await fetch(process.env.CONTACT_FORM_API, settings);
      navigate('/thanks-contact');
    } catch (error) {
      console.log(error);
      this.setState(
        {
          isLoading: false,
        },
        () => {
          toast(<Error message="An error has occurred" />, {
            position: 'bottom-right',
            hideProgressBar: true,
          });
        },
      );
    }
  }

  render() {
    const { btnText } = this.props;
    const {
      data: { name, phone, email, message },
      isLoading,
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <ToastContainer />
        <Field>
          <Control>
            <Label htmlFor="contanctFormName">Name</Label>
            <Input
              id="contanctFormName"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label htmlFor="contanctFormPhone">Phone</Label>
            <Input
              id="contanctFormPhone"
              type="number"
              name="phone"
              placeholder="Phone number is optional"
              value={phone}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label htmlFor="contanctFormEmail">Email</Label>
            <Input
              id="contanctFormEmail"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label htmlFor="industry-field">Industry</Label>
            <Select isSize={'isLarge'} onChange={this.handleChange} name="industry">
              {INDUSTRIES.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </Select>
          </Control>
        </Field>
        <Field>
          <Control>
            <Label htmlFor="contanctFormMessage">
              What is your the main problem that you are trying to solve? (Optional)
            </Label>
            <TextArea
              id="contanctFormMessage"
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field isGrouped>
          <Control>
            <ButtonDefault isLoading={isLoading} type="submit">
              {btnText}
            </ButtonDefault>
          </Control>
        </Field>
      </form>
    );
  }
}
