import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Login from './Login';
import Register from './Register';

function Main({ onEditAvatar, onEditProfile, cards, onCardClick, onAddPlace, onCardLike, onCardDelete, changeHeaderLink, loggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <Switch>
        <Route path="/sign-up">
          <Register handleChangeHeaderLink={changeHeaderLink} />
        </Route>
        <Route path="/sign-in">
          <Login handleChangeHeaderLink={changeHeaderLink} />
        </Route>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-up" />}
        </Route>
      </Switch>
      {loggedIn && (
        <>
         <section className="profile" aria-label="профиль">
         <div className="profile__avatar-block">
           <button onClick={onEditAvatar} type="button" aria-label="Смена аватара" className="profile__avatar-change-button buttons"></button>
           <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
         </div>
         <div className="profile__info">
           <h1 className="profile__name">{currentUser.name}</h1>
           <button onClick={onEditProfile} type="button" aria-label="Редактирование профиля" className="profile__edit-button buttons"></button>
           <p className="profile__about">{currentUser.about}</p>
         </div>
         <button onClick={onAddPlace} type="button" aria-label="Добавление карточки" className="profile__add-button buttons"></button>
       </section>
       <section className="posts" aria-label="посты">
         {cards.map((item) => (
           <Card card={item} key={item._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
         ))}
       </section>
       </>
      )}
    </main >
  )
}

export default Main;