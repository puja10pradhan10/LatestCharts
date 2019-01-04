import React from 'react';
import { VictoryPie } from 'victory-pie';
import { VictoryTooltip } from 'victory-tooltip';
import { VictoryLabel, VictoryChart } from 'victory';

class StackedVictoryBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'hello'
        }
    }

    render() {
        return (
            <div class="previewArea">

                <svg viewBox="0 0 400 400">
                    <VictoryPie
                        data={[
                            { x: 'A', y: 55 },
                            { x: 'B', y: 41 },
                            { x: 'C', y: 92 },
                            { x: 'D', y: 36 },
                            { x: 'E', y: 10 }
                        ]}
                        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                        standalone={false}
                        width={400} height={400}
                        innerRadius={68} labelRadius={100}
                        style={{ labels: { fontSize: 10 } }}
                        innerRadius={100}
                        labelRadius={120}
                        labels={(d) => `total: ${d.y}`}
                        labelComponent={<VictoryTooltip />}

                    />
                </svg>
            </div>
        )
    }
}

export default StackedVictoryBarComponent;