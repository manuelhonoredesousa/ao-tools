import { ToolList } from "@/components/tool-list";
import { Typography } from "@/components/ui/typography";

export default function Home() {
	return (
		<main className="h-screen px-2 sm:p-4 lg:p-6">
			<Typography className="text-2xl font-bold mb-4">
				Todas ferramentas
			</Typography>

			<ToolList />
		</main>
	);
}
