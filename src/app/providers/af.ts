import { Injectable } from "@angular/core";
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AF {
  public builds: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  constructor(public af: AngularFire) {
    this.builds = this.af.database.list('builds');
  }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  logout() {
    return this.af.auth.logout();
  }
  
  getBuilds() {
      return this.builds;
  }

  sendBuild(build, tags) {
    var splitBuild = build.split('\n');
    splitBuild.splice(1, 1);
    console.log(splitBuild);
    var newBuild = {
      build: splitBuild,
      tags,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.builds.push(newBuild);
  }
}