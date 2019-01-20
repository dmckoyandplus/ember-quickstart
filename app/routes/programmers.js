import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return ['Crash Override', 'Acid Burn', 'Nikon', 'Phreak', 'Joey']
  }
});
