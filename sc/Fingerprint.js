// class FingerprintPopup extends Component {
 
//     componentDidMount() {
//       FingerprintScanner
//         .authenticate({ description: 'Scan your fingerprint on the device scanner to continue' })
//         .then(() => {
//           this.props.handlePopupDismissed();
//           AlertIOS.alert('Authenticated successfully');
//         })
//         .catch((error) => {
//           this.props.handlePopupDismissed();
//           AlertIOS.alert(error.message);
//         });
//     }
   
//     render() {
//       return false;
//     }
//   }
   
//   FingerprintPopup.propTypes = {
//     handlePopupDismissed: PropTypes.func.isRequired,
//   };
   
//   export default FingerprintPopup;