import React from 'react'
import { Table } from 'semantic-ui-react'

function Read() {
  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>firstname</Table.HeaderCell>
            <Table.HeaderCell>lastname</Table.HeaderCell>
            <Table.HeaderCell>checked</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>firstname</Table.Cell>
              <Table.Cell>lastname</Table.Cell>
              <Table.Cell>checked</Table.Cell>
            </Table.Row>
          </Table.Body>
      </Table>
    </div>
  )
}

export default Read