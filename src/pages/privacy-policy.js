import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingPageLayout from '../components/2020/LandingPageLayout';

// TYPOGRAPHY
import { Title, SubTitle, SubTitle2 } from '../components/2020/LandingTypography';
import H1 from '../components/Typography/H1';
import Paragraph from '../components/Typography/Paragraph';

import Styled from 'styled-components';

const Section = Styled.div`
  margin-bottom: 3rem;
`;

class PrivacyPolicy extends Component {
  render() {
    const siteTitle = 'Privacy Policy | Cobuild Lab';
    const siteDescription = 'Privacy Policy for the Cobuild Lab';

    return (
      <LandingPageLayout withFooter siteTitle={siteTitle} siteDescription={siteDescription}>
        <Section>
          <Columns>
            <Column>
              <H1 className="mb-2">Privacy Policy</H1>
              <Paragraph>
                <small>Effective date: September 06, 2018</small>
              </Paragraph>
              <Paragraph>
                Cobuild Lab INC (“us”, “we”, or “our”) operates the https://cobuildlab.com/ website
                and the Cobuild App mobile application (the “Service”).
              </Paragraph>
              <Paragraph>
                This page informs you of our policies regarding the collection, use, and disclosure
                of personal data when you use our Service and the choices you have associated with
                that data. Our Privacy Policy for Cobuild Lab INC is managed through Free Privacy
                Policy.
              </Paragraph>
              <Paragraph>
                We use your data to provide and improve the Service. By using the Service, you agree
                to the collection and use of information in accordance with this policy. Unless
                otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the
                same meanings as in our Terms and Conditions.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title className="mb-2">Information Collection And Use</Title>
              <Paragraph>
                <small>
                  We collect several different types of information for various purposes to provide
                  and improve our Service to you.
                </small>
              </Paragraph>
              <SubTitle>Types of Data Collected</SubTitle>
              <SubTitle2>Personal Data</SubTitle2>
              <Paragraph>
                While using our Service, we may ask you to provide us with certain personally
                identifiable information that can be used to contact or identify you (“Personal
                Data”). Personally identifiable information may include, but is not limited to:
              </Paragraph>
              <ul>
                <li>
                  <Paragraph>Email address</Paragraph>
                </li>
                <li>
                  <Paragraph>First name and last name</Paragraph>
                </li>
                <li>
                  <Paragraph>Phone number</Paragraph>
                </li>
                <li>
                  <Paragraph>Cookies and Usage Data</Paragraph>
                </li>
              </ul>
              <Title isSize={4}>Usage Data</Title>
              <Paragraph>
                We may also collect information that your browser sends whenever you visit our
                Service or when you access the Service by or through a mobile device (“Usage Data”).
              </Paragraph>
              <Paragraph>
                This Usage Data may include information such as your computer’s Internet Protocol
                address (e.g. IP address), browser type, browser version, the pages of our Service
                that you visit, the time and date of your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </Paragraph>
              <Paragraph>
                When you access the Service by or through a mobile device, this Usage Data may
                include information such as the type of mobile device you use, your mobile device
                unique ID, the IP address of your mobile device, your mobile operating system, the
                type of mobile Internet browser you use, unique device identifiers and other
                diagnostic data.
              </Paragraph>
              <Title isSize={4}>Tracking & Cookies Data</Title>
              <Paragraph>
                We use cookies and similar tracking technologies to track the activity on our
                Service and hold certain information.
              </Paragraph>
              <Paragraph>
                Cookies are files with small amount of data which may include an anonymous unique
                identifier. Cookies are sent to your browser from a website and stored on your
                device. Tracking technologies also used are beacons, tags, and scripts to collect
                and track information and to improve and analyze our Service.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Use of Data</Title>
              <Paragraph>Cobuild Lab INC uses the collected data for various purposes:</Paragraph>
              <ul>
                <li>
                  <Paragraph>To provide and maintain the Service</Paragraph>
                </li>
                <li>
                  <Paragraph>To notify you about changes to our Service</Paragraph>
                </li>
                <li>
                  <Paragraph>
                    To allow you to participate in interactive features of our Service when you
                    choose to do so
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>To provide customer care and support</Paragraph>
                </li>
                <li>
                  <Paragraph>
                    To provide analysis or valuable information so that we can improve the Service
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>To monitor the usage of the Service</Paragraph>
                </li>
                <li>
                  <Paragraph>To detect, prevent and address technical issues</Paragraph>
                </li>
              </ul>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Transfer Of Data</Title>
              <Paragraph>
                Your information, including Personal Data, may be transferred to â€” and maintained
                on â€” computers located outside of your state, province, country or other
                governmental jurisdiction where the data protection laws may differ than those from
                your jurisdiction.
              </Paragraph>
              <Paragraph>
                if you are located outside United States and choose to provide information to us,
                please note that we transfer the data, including Personal Data, to United States and
                process it there.
              </Paragraph>
              <Paragraph>
                Your consent to this Privacy Policy followed by your submission of such information
                represents your agreement to that transfer.
              </Paragraph>
              <Paragraph>
                Cobuild Lab INC will take all steps reasonably necessary to ensure that your data is
                treated securely and in accordance with this Privacy Policy and no transfer of your
                Personal Data will take place to an organization or a country unless there are
                adequate controls in place including the security of your data and other personal
                information.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Disclosure Of Data</Title>
              <SubTitle>Legal Requirements</SubTitle>
              <Paragraph>
                Cobuild Lab INC may disclose your Personal Data in the good faith belief that such
                action is necessary to:
              </Paragraph>
              <ul>
                <li>
                  <Paragraph>To comply with a legal obligation</Paragraph>
                </li>
                <li>
                  <Paragraph>
                    To protect and defend the rights or property of Cobuild Lab INC
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    To prevent or investigate possible wrongdoing in connection with the Service
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    To protect the personal safety of users of the Service or the public
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>
                    To provide analysis or valuable information so that we can improve the Service
                  </Paragraph>
                </li>
                <li>
                  <Paragraph>To protect against legal liability</Paragraph>
                </li>
              </ul>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Security Of Data</Title>
              <Paragraph>
                The security of your data is important to us, but remember that no method of
                transmission over the Internet, or method of electronic storage is 100% secure.
                While we strive to use commercially acceptable means to protect your Personal Data,
                we cannot guarantee its absolute security.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Service Providers</Title>
              <Paragraph>
                We may use third-party Service Providers to monitor and analyze the use of our
                Service.
              </Paragraph>
              <Paragraph>
                These third parties have access to your Personal Data only to perform these tasks on
                our behalf and are obligated not to disclose or use it for any other purpose.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Analytics</Title>
              <Paragraph>
                We may use third-party Service Providers to monitor and analyze the use of our
                Service.
              </Paragraph>
              <Paragraph>
                Google Analytics Google Analytics is a web analytics service offered by Google that
                tracks and reports website traffic. Google uses the data collected to track and
                monitor the use of our Service. This data is shared with other Google services.
                Google may use the collected data to contextualize and personalize the ads of its
                own advertising network.
                <br />
                For more information on the privacy practices of Google, please visit the Google
                Privacy & Terms web page: https://policies.google.com/privacy?hl=en
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Links To Other Sites</Title>
              <Paragraph>
                We may use third-party Service Providers to monitor and analyze the use of our
                Service.
              </Paragraph>
              <Paragraph>
                Our Service may contain links to other sites that are not operated by us. If you
                click on a third party link, you will be directed to that third party’s site. We
                strongly advise you to review the Privacy Policy of every site you visit.
                <br />
                We have no control over and assume no responsibility for the content, privacy
                policies or practices of any third party sites or services.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Children’s Privacy</Title>
              <Paragraph>
                Our Service does not address anyone under the age of 18 (“Children”).
              </Paragraph>
              <Paragraph>
                We do not knowingly collect personally identifiable information from anyone under
                the age of 18. If you are a parent or guardian and you are aware that your Children
                has provided us with Personal Data, please contact us. If we become aware that we
                have collected Personal Data from children without verification of parental consent,
                we take steps to remove that information from our servers.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Children’s Privacy</Title>
              <Paragraph>
                We may update our Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page.
              </Paragraph>
              <Paragraph>
                We will let you know via email and/or a prominent notice on our Service, prior to
                the change becoming effective and update the “effective date” at the top of this
                Privacy Policy.
                <br />
                You are advised to review this Privacy Policy periodically for any changes. Changes
                to this Privacy Policy are effective when they are posted on this page.
              </Paragraph>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <Title>Contact Us</Title>
              <Paragraph>
                If you have any questions about this Privacy Policy, please contact us:
              </Paragraph>
              <Paragraph>
                By email: alacret@cobuildlab.com
                <br />
                By phone number: 7869913467
              </Paragraph>
            </Column>
          </Columns>
        </Section>
      </LandingPageLayout>
    );
  }
}

export default PrivacyPolicy;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
