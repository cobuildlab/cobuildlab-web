import React from 'react';
import {Column, Columns } from 'bloomer';
import { Link } from 'gatsby';
import { Icon } from 'react-icons-kit'
import { play } from 'react-icons-kit/fa/play'

export default ({ onClick }) => (
  <Columns>
    <Column isSize="1/2">
      <Link
        className="button is-primary is-medium is-rounded"
        to="#"
        onClick={onClick}
      >
        <Icon size="26" icon={play} /> &nbsp; VIDEO &nbsp;
      </Link>
    </Column>
    <Column isSize="1/2">
      <Link
        className="button is-primary is-medium is-rounded"
        target="_blank"
        to="/blog/best-software-development-process/"
      >
        READ MORE
      </Link>
    </Column>
  </Columns>
)