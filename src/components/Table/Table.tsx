import { FC } from 'react';
import { Person } from '../../types';
import TableRow from '../TableRow';

interface Props {
  people: Person[];
}

const Table: FC<Props> = ({ people }) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map((person) => (
          <TableRow person={person} key={person.slug} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
