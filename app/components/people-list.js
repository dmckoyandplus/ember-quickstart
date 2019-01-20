import Component from '@ember/component';

export default Component.extend({
  actions: {
    showPerson(person) {
      switch(person){
        case 'Crash Override':
          alert('Mess with the best, die like the rest.');
          break;
        default:
          alert(`${person} from that horrible 80's movie`);
      }
    }
  }
});
