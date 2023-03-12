const Reg = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

const detectDeviceType = () => Reg.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

detectDeviceType('webOS');