import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities, clubs, countries } from "@/data/mockData";

type FieldProps = {
  label: string;
  placeholder: string;
  options: string[];
};

function Field({ label, placeholder, options }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <Select>
        <SelectTrigger className="h-12 w-full rounded-xl border-border bg-secondary text-sm font-medium">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function SearchBar() {
  return (
    <section id="search" className="relative z-10 -mt-32 px-4 pb-6 md:-mt-40 md:px-6 lg:-mt-48 lg:px-8">
      <div className="relative mx-auto max-w-6xl rounded-3xl bg-card p-6 shadow-2xl ring-1 ring-border md:p-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-cta">
              Search
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold text-primary md:text-3xl">
              Find Your Camp
            </h2>
          </div>
          <div className="hidden text-xs text-muted-foreground md:block">
            3 filters · instant results
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          <Field label="Country" placeholder="All countries" options={countries} />
          <Field label="City" placeholder="All cities" options={cities} />
          <Field label="Club" placeholder="All clubs" options={clubs} />

          <div className="flex flex-col gap-1.5">
            <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-transparent lg:block">
              .
            </span>
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-cta px-6 text-sm font-semibold text-cta-foreground shadow-lg shadow-cta/25 transition-transform hover:scale-[1.02]"
            >
              <Search className="h-4 w-4" />
              Search Camps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
