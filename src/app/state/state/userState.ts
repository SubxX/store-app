import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../models/interfaces';
import { SetUser, SetDarkmode } from '../actions/userActions';
import { Injectable } from '@angular/core';

export class UserStateModel {
  user!: User;
  darkMode!: boolean;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: {
      uid: '',
      name: '',
      email: '',
      photoURL: ''
    },
    darkMode: false
  }
})
@Injectable()
export class UserState {

  // @Selector()
  // static getUser(state: UserStateModel) {
  //   return state.user;
  // }

  @Action(SetUser)
  updateUser({ getState, patchState }: StateContext<UserStateModel>, { payload }: SetUser) {
    const state = getState().user;
    patchState({
      user: { ...state, ...payload }
    })
  }

  @Action(SetDarkmode)
  setDarkMode({ getState, patchState }: StateContext<UserStateModel>, { payload }: SetDarkmode) {
    if (payload) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
    patchState({ darkMode: payload })
  }

}
