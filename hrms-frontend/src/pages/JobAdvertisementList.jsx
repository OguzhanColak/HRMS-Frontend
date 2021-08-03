import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'


export default function ProductList() {

    const [jobAdvertisement, setJobAdvertisement] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getjobAdvertisements().then((result) => setJobAdvertisement(result.data.data))
    })


    return (
        <div>
            <Header size='huge'>İş İlanları</Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Maaş Skalası</Table.HeaderCell>
                        <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisement.map(jobAdvertisement => (

                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobPositions.title}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.website}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.number_of_position}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.min_salary} ~ {jobAdvertisement.max_salary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.due_date}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                            </Table.Row>

                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
