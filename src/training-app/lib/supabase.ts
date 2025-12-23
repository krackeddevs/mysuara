import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
	if (supabaseInstance) {
		return supabaseInstance;
	}

	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error("Missing Supabase environment variables");
	}

	supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
	return supabaseInstance;
}

// Export a Proxy that lazily initializes the client when accessed
export const supabase = new Proxy({} as SupabaseClient, {
	get: (_, prop) => {
		const client = getSupabaseClient();
		const value = client[prop as keyof SupabaseClient];
		return typeof value === "function" ? value.bind(client) : value;
	},
});

// Database types
export interface User {
	id: string;
	email: string;
	privy_id?: string;
	region?: string;
	total_earnings: number;
	created_at: string;
	updated_at: string;
}

export interface TrainingSubmission {
	id: string;
	user_id: string;
	story_id?: number;
	original_text: string;
	corrected_text: string;
	audio_url?: string;
	region?: string;
	earnings: number;
	submitted_at: string;
}

// Storage bucket name for audio files
export const AUDIO_BUCKET = "audio-submissions";
