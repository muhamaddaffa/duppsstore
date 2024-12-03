import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu:
    | "overview"
    | "transaction"
    | "messages"
    | "card"
    | "reward"
    | "setting"
    | "log-out";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="icon-menu-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transaction"
            icon="icon-menu-transaction"
            active={activeMenu === "transaction"}
            href="/member/transactions"
          />
          <MenuItem
            title="Messages"
            icon="icon-menu-messages"
            active={activeMenu === "messages"}
            href="/member/messages"
          />
          <MenuItem
            title="Card"
            icon="icon-menu-card"
            active={activeMenu === "card"}
            href="/member/card"
          />
          <MenuItem
            title="Reward"
            icon="icon-menu-rewards"
            active={activeMenu === "reward"}
            href="/member/reward"
          />
          <MenuItem
            title="Setting"
            icon="icon-menu-settings"
            active={activeMenu === "setting"}
            href="/member/edit-profile"
          />
          <MenuItem title="Log Out" icon="icon-menu-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
