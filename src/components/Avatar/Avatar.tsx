import './Avatar.scss';

export const Avatar = () => (
  <div className="Avatar" data-cy="loader">
    <img className="Avatar__logo" src="./logo2.svg" alt="gi" width={140} />
    <div className="Avatar__title">Vacation</div>
    <div className="Avatar__date">02.06 - 06.06</div>
  </div>
);
