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
  '  Alternative Dispute Resolution',
  '  Alternative Medicine',
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
  '  Capital Markets',
  '  Chemicals',
  '  Civic and Social Organization',
  '  Civil Engineering',
  '  Commercial Real Estate',
  '  Computer & Network Security',
  '  Computer Games',
  '  Computer Hardware',
  '  Computer Networking',
  '  Computer Software',
  '  Construction',
  '  Consumer Elecronics',
  '  Consumer Goods',
  '  Consumer Services',
  '  Cosmetics',
  '  Dairy',
  '  Defense & Space',
  '  Design',
  '  E-learning',
  '  Education Management',
  '  Electrical & Electronic Manufacturing',
  '  Entertainment',
  '  Enviromental Services',
  '  Events Services',
  '  Executive Office',
  '  Facilities Services',
  '  Farming',
  '  Financial Services',
  '  Fine Art',
  '  Fishery',
  '  Food & Beverages',
  '  Food Production',
  '  Fund-Raising',
  '  Furniture',
  '  Gambling & Casinos',
  '  Glass, Ceramics & Concrete',
  '  Government Administration',
  '  Government Relations',
  '  Graphic Design',
  '  Health, Welness & Fitness',
  '  Higher Education',
  '  Hospital & Health Care',
  '  Hospitality',
  '  Human Resources',
  '  Import and Export',
  '  Individual & Family Services',
  '  Industrial Automation',
  '  Information Services',
  '  Information Technology and Services',
  '  Insurance',
  '  International Affairs',
  '  International Trade and Development',
  '  Internet',
  '  Investmend Management',
  '  Investment Banking',
  '  Judiciary',
  '  Law Enforcement',
  '  Law Practice',
  '  Legal Services',
  '  Legislative Office',
  '  Leisure, Travel & Turism',
  '  Libraries',
  '  Logistics & Supply Chain',
  '  Luxury Goods & Jewelry',
  '  Machinery',
  '  Management Consulting',
  '  Maritime',
  '  Market Research',
  '  Marketing & Advertising',
  '  Mechanical or Industrial Engineering',
  '  Media Production',
  '  Medical Device',
  '  Medical Practice',
  '  Mental Health Care',
  '  Military',
  '  Mining & Metals',
  '  Motion Pictures & Film',
  '  Museums and Institutions',
  '  Music',
  '  Nanotechnology',
  '  Newspapers',
  '  Non-profit Organization Management',
  '  Oil & Energy',
  '  Online Media',
  '  Outsourcing/Offshoring',
  '  Package/Freight Delivery',
  '  Packaging and Containers',
  '  Paper & Forest Products',
  '  Performing Arts',
  '  Pharmaceuticals',
  '  Philanthropy',
  '  Photography',
  '  Plastics',
  '  Political Organization',
  '  Primary/Secondary Education',
  '  Printing',
  '  Professional Training & Coaching',
  '  Program Development',
  '  Public Policy',
  '  Public Relations and Communications',
  '  Public Safety',
  '  Publishing',
  '  Railroad Manufacture',
  '  Ranching',
  '  Real Estate',
  '  Recreational Facilities & Services',
  '  Religious Institutions',
  '  Renewables & Envirnoment',
  '  Research',
  '  Restaurants',
  '  Retail',
  '  Security & Investigations',
  '  Semiconducs',
  '  Shipbuilding',
  '  Sporting Goods',
  '  Sporting Goods',
  '  Staffing & Recruiting',
  '  Supermarkets',
  '  Telecommunications',
  '  Textiles',
  '  Think Thanks',
  '  Tobacco',
  '  Translation & Localisation',
  '  Transportation/Trucking/Railroad',
  '  Utilities',
  '  Venture Capital & Private Equity',
  '  Veterinary',
  '  Warehousing',
  '  Wholesale',
  '  Wine & Spirits',
  '  Wireless',
  '  Writing & Editing',
];
const Label = styled(BloomerLabel)`
  color: #264a60;
`;

export default class Contact extends PureComponent {
  static defaultProps = {
    btnText: 'submit',
    location: {},
  };

  static propTypes = {
    btnText: PropTypes.string,
    landingName: PropTypes.string.isRequired,
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const { landingName, location } = this.props;
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
    this.locationJSON = JSON.stringify(location);
    this.urlState = queryString.parse(location.hash);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    for (let property in this.urlState) {
      if (this.urlState[property] !== undefined) {
        localStorage.setItem('utm_source', this.urlState[property]);
      }
    }
  }

  handleChange(e) {
    const field = { [e.target.name]: e.target.value };
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
            <Select isSize={'isLarge'}>
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
