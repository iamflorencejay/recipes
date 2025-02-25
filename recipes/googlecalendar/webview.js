'use strict';

const path = require('path');

module.exports = Franz => {
  let modal;
  let updates = 0;

  const waitFor = (condition, callback) => {
    if (!condition()) {
      window.setTimeout(waitFor.bind(null, condition, callback), 100);
    } else {
      callback();
    }
  };

  const createModal = () => {
    const franzModal = document.createElement('div');
    franzModal.setAttribute('id', 'franz-modal');
    franzModal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><p></p></div>';
    franzModal.querySelector('.close').addEventListener('click', hideModal);

    return franzModal;
  };

  const showModal = text => {
    modal.querySelector('p').innerHTML = text;
    updates++;
    modal.classList.add('open');
  };

  const hideModal = () => {
    modal.querySelector('p').innerHTML = '';
    updates--;
    modal.classList.remove('open');
  };

  window.alert = showModal;

  const getMessages = () => Franz.setBadge(updates);

  modal = createModal();
  waitFor(() => document.body, () => document.body.appendChild(modal));
  document.addEventListener('keydown', event => event.keyCode === 27 && hideModal());

  Franz.injectCSS(path.join(__dirname, 'calendar.css'));
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZWNhbGVuZGFyL3dlYnZpZXcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJtb2RhbCIsInVwZGF0ZXMiLCJjcmVhdGVNb2RhbCIsImZyYW56TW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVNb2RhbCIsInNob3dNb2RhbCIsInRleHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJhbGVydCIsImdldE1lc3NhZ2VzIiwic2V0QmFkZ2UiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJldmVudCIsImtleUNvZGUiLCJpbmplY3RDU1MiLCJqb2luIiwiX19kaXJuYW1lIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQkMsU0FBUztBQUN4QixNQUFJQyxLQUFKO0FBQ0EsTUFBSUMsVUFBVSxDQUFkOztBQUVBLFFBQU1DLGNBQWMsTUFBTTtBQUN4QixVQUFNQyxhQUFhQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0FGLGVBQVdHLFlBQVgsQ0FBd0IsSUFBeEIsRUFBOEIsYUFBOUI7QUFDQUgsZUFBV0ksU0FBWCxHQUF1Qiw0RUFBdkI7QUFDQUosZUFBV0ssYUFBWCxDQUF5QixRQUF6QixFQUFtQ0MsZ0JBQW5DLENBQW9ELE9BQXBELEVBQTZEQyxTQUE3RDs7QUFFQSxXQUFPUCxVQUFQO0FBQ0QsR0FQRDs7QUFTQSxRQUFNUSxZQUFZQyxRQUFRO0FBQ3hCWixVQUFNUSxhQUFOLENBQW9CLEdBQXBCLEVBQXlCRCxTQUF6QixHQUFxQ0ssSUFBckM7QUFDQVg7QUFDQUQsVUFBTWEsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsTUFBcEI7QUFDRCxHQUpEOztBQU1BLFFBQU1KLFlBQVksTUFBTTtBQUN0QlYsVUFBTVEsYUFBTixDQUFvQixHQUFwQixFQUF5QkQsU0FBekIsR0FBcUMsRUFBckM7QUFDQU47QUFDQUQsVUFBTWEsU0FBTixDQUFnQkUsTUFBaEIsQ0FBdUIsTUFBdkI7QUFDRCxHQUpEOztBQU1BQyxTQUFPQyxLQUFQLEdBQWVOLFNBQWY7O0FBRUEsUUFBTU8sY0FBYyxNQUFNbkIsTUFBTW9CLFFBQU4sQ0FBZWxCLE9BQWYsQ0FBMUI7O0FBRUFELFVBQVFFLGFBQVI7QUFDQUUsV0FBU2dCLElBQVQsQ0FBY0MsV0FBZCxDQUEwQnJCLEtBQTFCO0FBQ0FJLFdBQVNLLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDYSxTQUFTQSxNQUFNQyxPQUFOLEtBQWtCLEVBQWxCLElBQXdCYixXQUF0RTs7QUFFQVgsUUFBTXlCLFNBQU4sQ0FBZ0I3QixLQUFLOEIsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGNBQXJCLENBQWhCO0FBQ0EzQixRQUFNNEIsSUFBTixDQUFXVCxXQUFYO0FBQ0QsQ0FuQ0QiLCJmaWxlIjoiZ29vZ2xlY2FsZW5kYXIvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhbnogPT4ge1xuICBsZXQgbW9kYWw7XG4gIGxldCB1cGRhdGVzID0gMDtcblxuICBjb25zdCBjcmVhdGVNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBmcmFuek1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJhbnpNb2RhbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZyYW56LW1vZGFsJyk7XG4gICAgZnJhbnpNb2RhbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj48c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj48cD48L3A+PC9kaXY+JztcbiAgICBmcmFuek1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsKTtcblxuICAgIHJldHVybiBmcmFuek1vZGFsO1xuICB9O1xuXG4gIGNvbnN0IHNob3dNb2RhbCA9IHRleHQgPT4ge1xuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3AnKS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHVwZGF0ZXMrKztcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIH07XG5cbiAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3AnKS5pbm5lckhUTUwgPSAnJztcbiAgICB1cGRhdGVzLS07XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICB9O1xuXG4gIHdpbmRvdy5hbGVydCA9IHNob3dNb2RhbDtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9ICgpID0+IEZyYW56LnNldEJhZGdlKHVwZGF0ZXMpO1xuXG4gIG1vZGFsID0gY3JlYXRlTW9kYWwoKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiBldmVudC5rZXlDb2RlID09PSAyNyAmJiBoaWRlTW9kYWwoKSk7XG5cbiAgRnJhbnouaW5qZWN0Q1NTKHBhdGguam9pbihfX2Rpcm5hbWUsICdjYWxlbmRhci5jc3MnKSk7XG4gIEZyYW56Lmxvb3AoZ2V0TWVzc2FnZXMpO1xufTtcbiJdfQ==
