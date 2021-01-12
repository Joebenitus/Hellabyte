import mineBytesMp3 from './../sounds/mine-bytes.mp3';
import buyUpgradeMp3 from './../sounds/buy-upgrade.mp3';

export const playSoundMineBytes = () => {
  const audio = new Audio(mineBytesMp3);
  audio.volume = 0.1;
  audio.play()
}

export const playSoundBuyUpgrade = () => {
  const audio = new Audio(buyUpgradeMp3);
  audio.volume = 0.1;
  audio.play();
}