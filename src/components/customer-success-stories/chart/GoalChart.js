import React from 'react';
import ReactECharts from 'echarts-for-react';
import colors from '../../2021/colors.json';

import PropTypes from 'prop-types';
import { TextIndigo } from '../../2021/text/TextHelpers';
import styled from 'styled-components';

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const GoalChart = ({ goal, subTitle, description }) => {
  return (
    <div>
      <ReactECharts
        option={{
          series: [
            {
              name: 'Radius Mode',
              type: 'pie',
              radius: [65, 100],
              color: [colors.orange, '#69c6ff'],
              center: ['50%', '50%'],
              roseType: 'radius',
              itemStyle: {
                borderRadius: 0,
              },
              label: {
                color: colors.indigo,
                fontSize: '40',
                position: 'center',
                backgroundColor: '#FFFFFF',
                width: 130,
                height: 130,
                borderRadius: 100,
                shadowColor: 'gray',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                formatter: () => {
                  return `${goal}%`;
                },
              },
              emphasis: {
                label: {
                  show: true,
                },
              },
              data: [
                {
                  value: goal,
                  name: '',
                  itemStyle: {
                    shadowColor: '#362d2d82',
                    shadowBlur: 5,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                  },
                },
                {
                  value: 100 - goal,
                  name: '',
                  itemStyle: {
                    shadowColor: '#362d2d82',
                    shadowBlur: 2,
                    shadowOffsetX: 1,
                    shadowOffsetY: 1,
                  },
                },
              ],
            },
          ],
        }}
        style={{ width: '100%' }}
      />
      <TextContainer>
        {subTitle ? <TextIndigo style={{ fontWeight: 'bold' }}>{subTitle} </TextIndigo> : null}
        {description ? <TextIndigo>{description}</TextIndigo> : null}
      </TextContainer>
    </div>
  );
};

GoalChart.propTypes = {
  goal: PropTypes.number,
  subTitle: PropTypes.string,
  description: PropTypes.string,
};

GoalChart.defaultProps = {
  goal: 0,
  subTitle: '',
  description: '',
};

export default GoalChart;
