import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Columns,
  Column,
  Title
} from 'bloomer';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon
} from 'react-share';
import '../assets/css/share.scss';

const Share = ({ socialConfig }) => (
  <div className="post-social">
    <Title isSize={5} tag="h3" isMarginless hasTextAlign="centered">
      SHARE:
    </Title>
    <Container>
      <Columns hasTextAlign="centered">
        <Column>
          <FacebookShareButton
            url={socialConfig.config.url}
            className="button is-outlined is-rounded facebook float-center"
          >
            <FacebookIcon size={32} round={true}/>
          </FacebookShareButton>
          <TwitterShareButton
            url={socialConfig.config.url}
            className="button is-outlined is-rounded twitter float-center"
            title={socialConfig.config.title}
            via={socialConfig.twitterHandle.split('@').join('')}
          >
            <TwitterIcon size={32} round={true}/>
          </TwitterShareButton>
          <GooglePlusShareButton
            url={socialConfig.config.url}
            className="button is-outlined is-rounded googleplus float-center"
          >
            <GooglePlusIcon size={32} round={true}/>
          </GooglePlusShareButton>
          <LinkedinShareButton
            url={socialConfig.config.url}
            className="button is-outlined is-rounded linkedin float-center"
            title={socialConfig.config.title}
          >
            <LinkedinIcon size={32} round={true}/>
          </LinkedinShareButton>
          <RedditShareButton
            url={socialConfig.config.url}
            className="button is-outlined is-rounded reddit float-center"
            title={socialConfig.config.title}
          >
            <RedditIcon size={32} round={true}/>
          </RedditShareButton>
          <WhatsappShareButton
            url={socialConfig.config.url}
            className="button is-outlined is-rounded whatsapp float-center"
            title={socialConfig.config.title}
          >
            <WhatsappIcon size={32} round={true}/>
          </WhatsappShareButton>
          <TelegramShareButton
            url={socialConfig.config.url}
            className="button is-outlined is-rounded whatsapp float-center"
            title={socialConfig.config.title}
          >
            <TelegramIcon size={32} round={true}/>
          </TelegramShareButton>
          <EmailShareButton
            url={socialConfig.config.url}
            className="button is-outlined is-rounded whatsapp float-center"
            title={socialConfig.config.title}
          >
            <EmailIcon size={32} round={true}/>
          </EmailShareButton>
        </Column>
      </Columns>
    </Container>
  </div>
);
Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  }).isRequired
};
export default Share;
