"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "./button";
import queryString from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

const FormSchema = z.object({
	q: z.string().min(3, {
		message: "Username must be at least 3 characters.",
	}),
});

export function SearchInput() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			q: "",
		},
	});

	const searchParams = useSearchParams();
	const router = useRouter();

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
		const current = queryString.parse(searchParams.toString());
		const query = { ...current, q: data.q };

		const url = queryString.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{ skipNull: true }
		);
		router.push(url);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-1/3 space-y-6 flex items-center"
			>
				<FormField
					control={form.control}
					name="q"
					render={({ field }) => (
						<FormItem>
							{/* <FormLabel>Username</FormLabel> */}
							<FormControl>
								<Input
									placeholder="Search Products"
									{...field}
								/>
							</FormControl>

							{/* <FormMessage /> */}
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
