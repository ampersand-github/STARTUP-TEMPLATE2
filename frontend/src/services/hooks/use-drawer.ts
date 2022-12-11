import { atom, useRecoilState } from "recoil";
import { RecoilAtomKeys } from "src/services/constraints/recoil/recoil-atom-key";

const drawerState = atom<boolean>({
  key: RecoilAtomKeys.DRAWER_STATE,
  default: false,
  dangerouslyAllowMutability: true,
});

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useRecoilState(drawerState);
  const toggle = () => setIsOpen(!isOpen);
  return { isOpen, toggle };
};
