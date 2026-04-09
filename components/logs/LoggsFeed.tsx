import { getLogs } from "@/services/logs.service";
import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";

type Log = {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  mood: string;
  loggedAt: string;
};

const LoggsFeed = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => getLogs(),
    queryKey: ["logs-feed"],
  });

  const logs: Log[] = data?.data?.data ?? [];

  return (
    <div>
      <p
        className="label"
        style={{ fontSize: "0.65rem", marginBottom: "1.25rem" }}
      >
        RECENT ENTRIES
      </p>
      {isLoading ? (
        <div className="flex flex-col gap-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-base animate-pulse bg-surface h-28"
            />
          ))}
        </div>
      ) : logs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 gap-2 text-center">
          <p
            className="font-display italic text-primary"
            style={{ fontSize: "1.1rem" }}
          >
            Nothing here yet
          </p>
          <p className="text-secondary text-sm">
            Your entries will show up here once you start logging.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {logs.map((log) => (
            <EntryCard key={log._id} log={log} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoggsFeed;

const moodColor = (mood: string) => {
  const map: Record<string, string> = {
    great: "#52b788",
    good: "#2d6a4f",
    okay: "#d4a843",
    rough: "#b0a898",
    calm: "#74c2e1",
  };
  return map[mood] ?? "transparent";
};

const EntryCard = ({ log }: { log: Log }) => {
  const date = parseISO(log.loggedAt);

  return (
    <div
      className="p-5 rounded-xl border border-base cursor-pointer transition-colors"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="label" style={{ fontSize: "0.65rem" }}>
            {format(date, "EEEE").toUpperCase()} ·{" "}
            {format(date, "MMM d").toUpperCase()}
          </p>
          {log.title && (
            <h3
              className="font-display mt-0.5"
              style={{ fontSize: "1rem", fontStyle: "italic" }}
            >
              {log.title}
            </h3>
          )}
        </div>
        {log.mood && (
          <div
            className="shrink-0 rounded-full mt-1"
            title={`Mood: ${log.mood}`}
            style={{
              width: 10,
              height: 10,
              backgroundColor: moodColor(log.mood),
            }}
          />
        )}
      </div>
      <p
        className="text-secondary"
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.7,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {log.content}
      </p>
      {log.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {log.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
