import React from 'react'
import { Grid } from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import JobAdvertisementList from '../pages/JobAdvertisementList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <JobSeekerList/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <JobAdvertisementList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}