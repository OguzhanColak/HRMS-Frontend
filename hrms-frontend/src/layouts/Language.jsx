import React from 'react'
import { Dropdown } from 'semantic-ui-react'
export default function Language() {
    return (
        <div>
            <Dropdown item text='Dil'>
                <Dropdown.Menu>
                    <Dropdown.Item>Türkçe</Dropdown.Item>
                    <Dropdown.Item>İngilizce</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}