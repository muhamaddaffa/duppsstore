import Overview from "@/components/organisms/OverviewContent";
import SideBar from "@/components/organisms/SideBar";
export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <Overview />
    </section>
  );
}
